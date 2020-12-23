import React, { useState } from 'react';
import axios from 'axios'
import LogoSection from './logoSection';
import FormSection from './formSection';
import ResponseSection from './responseSection';
import { RaterContainer, RaterTopBox, BackgroundImageSection } from './style';
import Loader from 'shared/Loader';
const Home = () => {
    const initialValue = {
        details: null,
        type: null
    };
    const [ imageFiles, setImageFiles ] = useState(initialValue);
    const [ imageError, setImageError ] = useState('');
    const [ visionValue, setVisionValue ] = useState([]);
    const [ extractedValue, setExtractedValue ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const handleRaterForm = (data) => {
        if(!imageFiles.details) {
            setImageError('Please provide image');
            return
        }
        const userFile = imageFiles.details[ 0 ];
        const projectType = data.permitValue;
        const projectId = '1';

        const imageName = imageFiles.details[ 0 ].name;
        const imagePath = 'example/'+imageName;
        setIsLoading(true);
        const fd = new FormData();
        fd.append('file', userFile);
        fd.append('project_type', projectType);
        fd.append('project_id', projectId);
        fd.append('image_name', imageName);
        fd.append('image_path', imagePath);
        fd.append('url',' ');
        fd.append('token', data.accessToken);
        fd.append('image_type', imageFiles.details[ 0 ].type);
        setVisionValue([]);
        setExtractedValue([]);
        axios.post(`https://dev-vision.energyrater.ai/${ data.permitValue }`, fd).then( response => {
            setIsLoading(false);
            setVisionValue(response.data.data);
            setExtractedValue(response.data.raw_data);
        }).catch(() => {
            setIsLoading(false);
        })

    }

    const clearImageAction = () => {
        setImageFiles(initialValue)
    }
    return (
        <RaterContainer>
            {
                isLoading && <Loader />
            }
            <RaterTopBox>
                <BackgroundImageSection>
                    <LogoSection />
                    <FormSection
                        handleRaterForm = { handleRaterForm }
                        imageFiles={ imageFiles }
                        setImageFiles={ setImageFiles }
                        clearImageAction={ clearImageAction }
                        imageError={ imageError }
                        setImageError={ setImageError } />
                </BackgroundImageSection>

            </RaterTopBox>
            <ResponseSection
                visionValue={ visionValue }
                extractedValue={ extractedValue } />
        </RaterContainer>
    )
}

export default Home;