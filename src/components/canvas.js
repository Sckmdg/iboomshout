import React, {Component} from 'react';
export default class Canvas extends Component {

	render() {

		return (
			<div className='col-md-8 canvas text-center'>Here will be canvas for pictures
			<canvas id="c" width="740" height="400"></canvas>
			</div>
			);
	}

}
