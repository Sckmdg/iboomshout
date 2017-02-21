import React, {Component} from 'react';
import {fabric} from 'fabric';
import grumpycat from '../img/grumpycat.png'
export default class Canvas extends Component {

	constructor(props) {
		super(props);
		this.state = {
			left: 305,
			top: 140,
			fontWeight: 'normal',
			fontSize: 30,
			check: false
		}
	}

	Check() {
		var canvas = this.state.canvas;
		var text = this.state.text;

		this.setState({check: !this.state.check});
		if (this.state.check == true) {
			text.on('selected', function(){
				canvas.add(text.set({fontWeight: 'bold'}));
			})
		}
		else {
			text.on('selected', function(){
				canvas.add(text.set({fontWeight: 'normal'}));
			})
		}
	}

	Change(){
		var canvas = this.state.canvas;
		this.setState({
			left: 140,
			top: 305
		});
		var rect = this.state.rect;
		rect.set({ width: 20, height: 100, fill: '#f55', opacity: 0.7 });
		canvas.add(rect);

		var inputText = this.refs.title.value;
		var text = new fabric.Text(inputText, {
			fontSize: this.state.fontSize,
		});
		canvas.add(text);
		this.setState({text: text});
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

		});

		this.setState({canvas: canvas});

		var rect = new fabric.Rect();
		this.setState({rect: rect});
		rect.set({ width: 100, height: 200, fill: '#f55', opacity: 0.7 });
		rect.on('selected', function() {
			console.log('selected a rectangle');
			console.log(this);
		});
		canvas.add(rect);


	}

	render() {
		console.log(this.state);
		return (
			<div className='col-md-8 canvas text-center'>
			<canvas id='c' width="720" height="363"></canvas>
			<button type="button" className="btn btn-primary" onClick={this.Change.bind(this)}>Change</button>
			<input type='text' ref='title'/>
			<input type="checkbox" id='checkbox' ref='checkrule' onChange={this.Check.bind(this)} /> <span>bold?</span>
			</div>
			);
	}

}
