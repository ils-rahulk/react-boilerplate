import React from 'react';
import TwoFa from 'components/Auth/TwoFa';
import { connect } from 'react-redux';
const TwoFaPage = (props) => {
    return <TwoFa { ...props }/>;
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TwoFaPage)