import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
            <div className="col-md-12">
                <h3>Forms</h3>
                <div className="spacer"></div>
                <form className="col-md-offset-3 col-md-7">
                    <div className="form-group">
                        <label htmlFor="inputText">Input</label>
                        <input type="text" id="inputText" name="inputText" className="form-control" placeholder="Email" autofocus />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputText">Text Area</label>
                        <textarea id="textArea" name="textArea" rows="4" className="form-control" placeholder="Text Area Content"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fileInput">File Input</label>
                        <input type="file" id="fileInput" name="fileInput" className="form-control" autofocus />
                    </div>
                    <div className="form-group">
                        <label htmlFor="checkbox">Check Boxes</label>
                        <div className="checkbox">
                          <label><input type="checkbox"  id="checkbox" name="checkbox" value="" /> Unchecked</label>
                        </div>
                        <div className="checkbox checked">
                          <label><input type="checkbox"  id="checkbox" name="checkbox" value="" defaultChecked /> Checked</label>
                        </div>
                        <div className="checkbox disabled">
                          <label><input type="checkbox"  id="checkbox" name="checkbox" value=""  disabled /> Disabled</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="optradio">Radio Buttons</label>
                        <div className="radio">
                          <label><input type="radio"  id="optradio" name="optradio" /> Unselected</label>
                        </div>
                        <div className="radio selected">
                          <label><input type="radio"  id="optradio" name="optradio" defaultChecked /> Selected</label>
                        </div>
                        <div className="radio disabled">
                          <label><input type="radio"  id="optradio" name="optradio" disabled /> Disabled</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="button" className="col-sm-5 btn btn-primary btn-lg  pull-left">Primary</button>
                        <button type="button" className="col-sm-5 btn btn-secondary-outline btn-lg pull-right">Secondary</button>
                    </div>
                </form>
                <div className="spacer"></div>
            </div>
        );
    }
}
