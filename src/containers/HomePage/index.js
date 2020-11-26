import React from 'react';
import Home from 'components/Home';
import { connect } from 'react-redux';

const HomePage = (props) => {
    return <Home { ...props }/>;
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage)