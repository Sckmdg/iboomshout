/**
 * Composing components
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Canvas from '../components/canvas';
import Editor from '../components/editor';
import ImageForm from '../components/imageForm';
import actions from '../actions/actions';
class App extends Component {
    /**
     * In Canvas and Editor we sent actions and store data
     * @returns {XML}
     */
    render() {
        const {canvas} = this.props;
        return (
            <div className='app'>
                <div className='myFrame'>
                    <h2 className='text-center'>Boom Shout</h2>
                </div>
                <Canvas
                    canvas={canvas}
                    createCanvas={this.props.actions.createCanvas}
                />
                <Editor
                    canvas={canvas}
                    createText={this.props.actions.createText}
                    boldText={this.props.actions.boldText}
                    createValue={this.props.actions.createValue}
                    emptyValue={this.props.actions.emptyValue}
                    setInput={this.props.actions.setInput}
                />
                <ImageForm
                    canvas={canvas}
                    saveCanvas={this.props.actions.saveCanvas}
                />
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
