import React, {Component} from 'react';
import {fabric} from 'fabric';
import windowGlass from '../img/windowGlass.jpg';
export default class Canvas extends Component {
    /**
     *Setting initial state
     */
    constructor(props) {
        super(props);
        this.state = {
            left: 305,
            top: 140,
            checkBold: false,
            emptySize: true,
            emptyUrl: true
        };
        this.state.text = {
            fontWeight: 'normal',
            fontFamily: 'Helvetica Neue',
            fontSize: 30
        }
    }

    /**
     *Here we are taking ref value from input
     *and creating the title with options that we set,
     *also make fields empty after create title
     */
    TextAdd(){
        let canvas = this.state.canvas,
            inputSize = this.refs.size.value,
            fontWeight = this.state.text.fontWeight,
            left = this.state.left,
            top = this.state.top;
        let weight,
            size,
            e,
            currentFont;

        e = document.getElementById('fontFamily');
        currentFont = e.options[e.selectedIndex].text;

        (inputSize == null || inputSize == "") ? size = this.state.text.fontSize : size = this.refs.size.value;

        (this.state.checkBold == true) ? weight = 'bold' : weight = fontWeight;

        const text = new fabric.IText('Tap and Type', {
            left: left,
            top: top,
            fontFamily: currentFont,
            fontSize: size,
            fontWeight: weight
        });

        canvas.add(text);

        this.refs.size.value = '';
        this.setState({emptySize: true});
        let self = this;

        text.on('selected', function(){
                self.refs.size.value = text.fontSize;
            },
        );

        text.on('deselected', function(){
                self.refs.size.value = '';
            }
        );

        document.getElementById('fontSize').onchange = function() {
            canvas.getActiveObject().setFontSize(this.value);
            canvas.renderAll();
        };

        document.getElementById('fontFamily').onchange = function() {
            canvas.getActiveObject().setFontFamily(this.options[this.selectedIndex].text);
            canvas.renderAll();
        };

        document.getElementById('checkbox').onchange = function () {
            (self.state.checkBold == true) ? canvas.getActiveObject().set('fontWeight', 'bold') : canvas.getActiveObject().set('fontWeight', 'normal');
            canvas.renderAll();
        } ;
    }

    /**
     *Making true/false checkbox value, that used in TextAdd
     */
    Bold() {
        this.setState({ checkBold: !this.state.checkBold });
    }

    /**
     *If field not empty - making available buttons (add text and add image from url)
     */
    onFieldChange (fieldName, e) {
        if (e.target.value.trim().length) {
            this.setState({['' +fieldName]: false})
        } else {
            this.setState({['' +fieldName]: true})
        }
    }

    /**
     *Here we adding image from url if CORS let us do it
     */
    // FromUrl(){
    //     const canvas = this.state.canvas,
    //         left = this.state.left,
    //         top = this.state.top,
    //         url = this.refs.url.value;
    //     fabric.Image.fromURL(url, function(obj) {
    //         canvas.add(obj.set({
    //             top: top-50,
    //             left: left
    //         }));
    //     }, {crossOrigin: 'Anonymous'});
    //     this.refs.url.value = '';
    //     this.setState({emptyUrl: true});
    // }


    /**
     *Saving our image as png if browser can do it
     */

    Save(){
        const canvas = this.state.canvas;

        if (!fabric.Canvas.supports('toDataURL')) {
            alert('This browser doesn\'t provide means to serialize canvas to an image');
        }
        else {
            window.open(canvas.toDataURL('png'));
        }
    }

    /**
     *Here we creating our canvas and background
     */
    componentDidMount() {
        let canvas = new fabric.Canvas('c');

        canvas.setBackgroundImage(windowGlass, canvas.renderAll.bind(canvas), {
            width: canvas.width,
            height: canvas.height
        });

        this.setState({canvas: canvas});
        let self = this;
        document.getElementById('file').addEventListener("change", function (e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = function (f) {
                let data = f.target.result;
                fabric.Image.fromURL(data, function (img){
                    let oImg = img.set({
                        left: self.state.left,
                        top: self.state.top
                    });
                    canvas.add(oImg);
                });
            };
            reader.readAsDataURL(file);
        });

    }

    render() {
        return (
            <div>
                <div className='col-md-8 canvas text-center'>
                    <canvas id='c' width='720' height='450'></canvas>
                </div>
                <div className='col-md-4 imageLoader'>
                    <h4 className='text-center' >Add some text</h4>
                    <div className='form-group'>
                        <label>Font-Size</label>
                        <input type='number' className='form-control' id='fontSize' placeholder='input size number of Font-Size' ref='size'/>
                    </div>
                    <div className='form-group'>
                        <label>Font-Family</label>
                        <select className='form-control' id='fontFamily'>
                            <option value='1'>Helvetica Neue</option>
                            <option value='2'>Helvetica</option>
                            <option value='3'>Arial</option>
                            <option value='4'>sans-serif</option>
                        </select>
                    </div>
                    <div className='checkbox'>
                        <label>
                            <input type='checkbox' id='checkbox' ref='bold' onChange={this.Bold.bind(this)} /> Bold
                        </label>
                    </div>
                    <button type='submit' className='btn btn-default' onClick={this.TextAdd.bind(this)} >Add text</button>
                    <br />
                    <br />
                    <h4 className='text-center'>Add your own image</h4>
                    <div className='form-group'>
                        <label className="control-label">Select File</label>
                        <input id='file' ref='url' type='file' className='file' onChange={this.onFieldChange.bind(this, 'emptyUrl')}/>
                    </div>
                    <div className='form-group'>
                        <h4 className='text-center'>Save canvas</h4>
                        <button type='submit' className='btn btn-default' onClick={this.Save.bind(this)} >Save</button>
                    </div>
                </div>
            </div>
        );
    }

}