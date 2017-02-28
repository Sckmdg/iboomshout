/*Compose our components*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Canvas from '../components/canvas';
import Editor from '../components/editor';
class App extends Component {
    render() {
        const {canvas} = this.props;
        return (
            <div className='app col-md-12'>
                <div className='myFrame'>
                    <h2 className='myName text-center'>Boom Shout</h2>
                </div>
                <Canvas canvas={canvas}/>
                <Editor />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        canvas: state.canvas
    }
}

export default connect(mapStateToProps)(App)