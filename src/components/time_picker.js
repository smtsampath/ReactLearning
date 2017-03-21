import React, { Component } from 'react';

export default class TimePicker extends Component {
    render() {
        return (
            <div className="col-md-12">
                <h3>Time Picker</h3>
                <div className="spacer"></div>
                <div className="col-md-offset-3 col-md-6">
                    <div className="form-group">
                    <div className='input-group date' id='timepicker'>
                        <input type='text' className="form-control" />
                        <span className="input-group-addon">
                            <span className="glyphicon glyphicon-time"></span>
                        </span>
                    </div>
                    </div>
                  <div className="spacer"></div>
                </div>
            </div>
        );
    }
}
