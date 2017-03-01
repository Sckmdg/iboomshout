/*Compose our components*/
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Canvas from '../components/canvas';
import Editor from '../components/editor';
import actions from '../actions/actions';
class App extends Component {

    render() {
        const {canvas} = this.props;
        return (
            <div className='app col-md-12'>
                <div className='myFrame'>
                    <h2 className='myName text-center'>Boom Shout</h2>
                </div>
                <Canvas canvas={canvas} createCanvas={this.props.actions.createCanvas}/>
                <Editor canvas={canvas} createText={this.props.actions.createText}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        canvas: state.canvas
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

App.propTypes = {
    canvas: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
