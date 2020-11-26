import React from 'react';
import Home from 'components/Home';
import { connect } from 'react-redux';

const HomePage = (props) => {
    return <Home { ...props }/>;
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage)