import React, {Component} from 'react';
import {fabric} from 'fabric';
export default  class ImageForm extends Component {

    /**
     * Loading images from pc to canvas
     * It's OnChange function - check loaded value, and then renders him with position settings from store
     */
    LoadImage = (e) => {
        let reader = new FileReader();
        reader.onload = (event) => {
            let imgObj = new Image();
            imgObj.src = event.target.result;
            imgObj.onload = () => {
                let image = new fabric.Image(imgObj);
                image.set({
                    left: this.props.canvas.left,
                    top: this.props.canvas.top
                });
                this.props.canvas.klass.add(image);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    /**
     * Allows us to save canvas as image in png format if browser can do it
     */
    Save = () => {
        console.log(this.props);
        (fabric.Canvas.supports('toDataURL') == true) ?
            window.open(this.props.canvas.klass.toDataURL('png')) : alert('This browser doesn\'t provide means to serialize canvas to an image');
    };

    render() {
        return (
            <div className='imageForm col-md-4'>
                <h4 className='text-center'>Add your own image</h4>
                <div className='form-group'>
                    <label className="control-label">Select File</label>
                    <input id='file' type='file' className='file' onChange={this.LoadImage}/>
                </div>
                <div className='form-group'>
                    <h4 className='text-center'>Save canvas</h4>
                    <button type='submit' className='btn btn-default' onClick={this.Save}>Save</button>
                </div>
            </div>
        );
    }
}