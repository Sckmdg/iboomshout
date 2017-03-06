import React, {Component} from 'react';
import {fabric} from 'fabric';
export default class Editor extends Component {
    /**
     * Here we checking if we change checkBold => selected text object will change his fontWeight
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        if (nextProps.canvas.klass.getActiveObject()) {

            if (nextProps.canvas.checkBold == true) {
                nextProps.canvas.klass.getActiveObject().set('fontWeight', 'bold')
            }
            else {
                nextProps.canvas.klass.getActiveObject().set('fontWeight', 'normal')
            }

        }

        nextProps.canvas.klass.renderAll();
    }

    /**
     * TextAdd create variables, that goes to text settings (payload for action),
     *  add text object to canvas and rendering him
     *
     * @constructor
     * inputSize takes value from input
     * fontWight/left/right - takes default value from store
     * weight/size - we need this value for future, when we will check choose that made user
     * element taking input where user choose font-family
     * currentFont - take value from element and goes to text settings
     */
    TextAdd = () => {
        let inputSize = this.refs.size.value,
            fontWeight = this.props.canvas.text.fontWeight,
            left = this.props.canvas.left,
            top = this.props.canvas.top,
            weight,
            size,
            element,
            currentFont;

        element = this.refs.fontFamily;
        currentFont = element.options[element.selectedIndex].text;

        /**
         * Checking our input
         * if it's empty => default value goes to text settings
         * else => value from inputSize goes to text settings
         */
        size = (inputSize == null || inputSize == '') ? this.props.canvas.text.fontSize : this.refs.size.value;

        /**
         * Checking checkbox
         * if it's fill => our text will be bold
         * else => taking default weight for text settings
         */
        if (this.props.canvas.checkBold == true) {
            weight = 'bold';
        }
        else {
            weight = fontWeight;
        }

        /**
         * This is text settings, payload for action
         */
        let text = new fabric.IText('Tap and Type', {
            left: left,
            top: top,
            fontFamily: currentFont,
            fontSize: size,
            fontWeight: weight
        });

        /**
         * Calling action that creates our text object to canvas and rendering him
         */
        this.props.createText(text);

        /**
         * make empty fontSize Input for future text
         * @type {string}
         */
        this.refs.size.value = '';

        /**
         * When text object is selected => it fills fontSize input fields with text settings
         */

        text.on('selected', () => {
            this.refs.size.value = text.fontSize;
        });
        /**
         * When text object is deselected => it makes fontSize input fields empty
         */
        text.on('deselected', () => {
            this.refs.size.value = '';
        });
    };

    /**
     * onChange function for selected object(for now only text)
     * When fontSize input value has been changed and object is selected => it will change and render object fontSize
     *
     * @return void
     */
    ChangedFontSize = () => {
        if (this.props.canvas.klass.getActiveObject()) {
            this.props.canvas.klass.getActiveObject().setFontSize(this.refs.size.value);
            this.props.canvas.klass.renderAll();
        }
    };

    /**
     * onChange function for selected object(for now only text)
     * When fontFamily input value has been changed and object is selected => it will change and render object fontFamily
     *
     * @return void
     */
    ChangedFontFamily = () => {
        let selected = this.refs.fontFamily.options[this.refs.fontFamily.selectedIndex].text;
        if (this.props.canvas.klass.getActiveObject()) {
            this.props.canvas.klass.getActiveObject().setFontFamily(selected);
            this.props.canvas.klass.renderAll();
        }
    };

    /**
     * Calling action and if text object is selected it will check checkbold for true/false
     *  and render bold or normal text
     * Also it affect to textAdd
     */
    Bold = () => {
        this.props.boldText();
    };

    render() {
        return (
            <div className='col-md-4 editor'>
                <h4 className='text-center'>Add some text</h4>
                <div className='form-group'>
                    <label>Font-Size</label>
                    <input type='number' className='form-control' id='fontSize'
                           placeholder='input size number of Font-Size' ref='size' onChange={this.ChangedFontSize}/>
                </div>
                <div className='form-group'>
                    <label>Font-Family</label>
                    <select className='form-control' id='fontFamily' ref='fontFamily'
                            onChange={this.ChangedFontFamily}>
                        <option value='1'>Helvetica Neue</option>
                        <option value='2'>Helvetica</option>
                        <option value='3'>Arial</option>
                        <option value='4'>sans-serif</option>
                    </select>
                </div>
                <div className='checkbox'>
                    <label>
                        <input type='checkbox' id='checkbox' ref='bold' onClick={this.Bold}/> Bold
                    </label>
                </div>
                <button type='submit' className='btn btn-default' onClick={this.TextAdd}>Add text</button>
            </div>
        );
    }
}