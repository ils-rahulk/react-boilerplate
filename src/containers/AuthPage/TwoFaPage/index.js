import React from 'react';
import TwoFa from 'components/Auth/TwoFa';
import { connect } from 'react-redux';
const TwoFaPage = (props) => {
    return <TwoFa { ...props }/>;
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TwoFaPage)