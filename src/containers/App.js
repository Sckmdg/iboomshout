/**
*Compose our components
*/
import React, { Component } from 'react';
import Canvas from '../components/canvas';
import ImageLoader from '../components/imageLoader';
import Draw from '../fabric/draw';
export default class App extends Component {
	componentDidMount() {
		Draw();
	}
	render() {
		
		return (
			<div className='app col-md-12'>
				<h2 className='text-center'>Boom Shout</h2>
				<Canvas />
				<ImageLoader />
			</div>
			)
	}
}
