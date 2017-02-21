/**
*Compose our components
*/
import React, { Component } from 'react';
import Canvas from '../components/canvas';
import ImageLoader from '../components/imageLoader';
export default class App extends Component {
	componentDidMount() {
	}
	render() {
		return (
			<div className='app col-md-12'>
				<div className='myFrame'>
					<h2 className='myName text-center'>Boom Shout</h2>
				</div>
				<Canvas />
				<ImageLoader />
			</div>
			)
	}
}
