import React, {Component} from 'react';
import {fabric} from 'fabric';
import grumpycat from '../img/grumpycat.png'
export default class Canvas extends Component {

	constructor(props) {
		super(props);
		this.state = {
			left: 305,
			top: 140
		}
	}

	Change(){

	}

	componentDidMount() {
		var canvas = new fabric.Canvas('c'),
		left = this.state.left,
		top = this.state.top;

		fabric.Image.fromURL(grumpycat, function(obj) {
			obj.filters.push(new fabric.Image.filters.Grayscale());
			obj.applyFilters(canvas.renderAll.bind(canvas));
			obj.setFlipX(true);
			canvas.add(obj.set({
				left: left, 
				top: top
			}));
			canvas.add(obj);
		});
	}

	render() {
		console.log(this.state)
		return (
			<div className='col-md-8 canvas text-center'>
			<canvas id='c' width="720" height="363"></canvas>
			<button type="button" className="btn btn-primary" onClick={this.Change.bind(this)}>Change</button>
			</div>
			);
	}

}
