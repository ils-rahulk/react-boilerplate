import React from 'react';
import Rater from 'components/Rater';
import { connect } from 'react-redux';

const RaterPage = (props) => {
    return <Rater { ...props }/>;
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RaterPage)