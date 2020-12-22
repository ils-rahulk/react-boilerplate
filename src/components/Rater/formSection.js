import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container, Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import Dropzone from 'react-dropzone'
import { renderSelectField, renderField } from 'utils/formUtils';
import { raterFormValidation as validate } from 'utils/validate';
import UploadSample from 'assets/svg/upload_sample.svg';
import CloseIcon from 'assets/svg/close.svg';
import { FormContainer, PreviewRaterSection, ErrorImageSection } from './style';
import { componentType, supportImage } from './constant';
const FormSection = (props) => {
    const {
        imageFiles,
        setImageFiles,
        handleRaterForm,
        handleSubmit,
        clearImageAction,
        imageError,
        setImageError,
        initialize
    } = props;
    useEffect(() => {
        initialize({
            permitValue: 'permit'
        })
    }, [])
    const onSelectFile = (acceptedFiles) => {
        const tempImageData = { ...imageFiles };
        const preview = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
        tempImageData.details = preview;
        const extenstion = acceptedFiles[ 0 ].name.split('.').pop();
        tempImageData.type = extenstion;
        setImageError('')
        setImageFiles(tempImageData)
    };
    return (
        <FormContainer>
            <Container className="rater-form">

                <form onSubmit={ handleSubmit((formData) => handleRaterForm(formData)) }>
                    <Row>
                        <Col md="6" className="form-rater-box">
                            <Field
                                label="Select Component Type"
                                name="permitValue"
                                type="text"
                                component={ renderSelectField }
                                optionValues={ componentType }
                            />
                            <Field
                                label="Enter Access Token:"
                                name="accessToken"
                                rows="5"
                                type="textarea"
                                component={ renderField }
                            />
                            <div className="d-flex justify-content-center desktop-rater-btn">
                                <Button className="rater-submit" type="submit" color="primary">Submit</Button>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="rater-right-wrap">
                                {
                                    !imageFiles.details ?
                                        <Dropzone onDrop={ onSelectFile } multiple={ false }>
                                            {({ getRootProps, getInputProps }) => (
                                                <section className="text-center fileUploadIcon">
                                                    <div  { ...getRootProps() } className="upload-areas">
                                                        <i className="fas fa-upload"></i>
                                                        <input { ...getInputProps() } />
                                                        <img src={ UploadSample } alt="" />
                                                        <p className="drag-text-rater">click here to upload <br /> a picture</p>
                                                    </div>
                                                </section>
                                            )}
                                        </Dropzone>
                                        :
                                        <PreviewRaterSection>
                                            <img
                                                src={ CloseIcon }
                                                alt=""
                                                className="cross-rater"
                                                onClick={ clearImageAction } />
                                            <div className="preview-rater-inner">
                                                {
                                                    supportImage.indexOf(imageFiles.type) > -1 ?
                                                        <>
                                                            {
                                                                imageFiles?.details?.map((file, index) => <img key={ index } src={ file.preview } alt="" /> )
                                                            }
                                                        </>
                                                        :
                                                        <iframe width="100%" height="100%" src={ imageFiles.details[ 0 ].preview }></iframe>
                                                }
                                            </div>
                                        </PreviewRaterSection>
                                }
                                {
                                    imageError &&
                                imageError !== '' &&
                                <ErrorImageSection>
                                    { imageError }
                                </ErrorImageSection>
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-center pt-4 mobile-rater-btn">
                                <Button className="rater-submit" type="submit" color="primary">Submit</Button>
                            </div>
                        </Col>
                    </Row>

                </form>
            </Container>
        </FormContainer>
    )
}

FormSection.propTypes = {
    handleRaterForm: PropTypes.func,
    imageFiles: PropTypes.object,
    setImageFiles: PropTypes.func,
    handleSubmit: PropTypes.func,
    clearImageAction: PropTypes.func,
    imageError: PropTypes.string,
    setImageError: PropTypes.func,
    initialize: PropTypes.func
}
export default reduxForm({
    form: 'raterForm',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: false,
    validate
})(FormSection);