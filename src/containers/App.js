/**
*Compose our components
*/
import React, { Component } from 'react';
import Canvas from '../components/canvas';
export default class App extends Component {
	render() {
		return (
			<div className='app col-md-12'>
				<div className='myFrame'>
					<h2 className='myName text-center'>Boom Shout</h2>
				</div>
				<Canvas />
			</div>
			)
	}
}
