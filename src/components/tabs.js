import React, { Component } from 'react';

export default class Tabs extends Component {
    render() {
        return (
            <div className="col-md-12">
                <h3>Tabs</h3>
              <ul className="nav nav-tabs row">
                    <li className="active"><a data-toggle="tab" href="#home"><span className="glyphicon glyphicon-ok-circle"></span> Home</a></li>
                    <li><a data-toggle="tab" href="#menu1"><span className="glyphicon glyphicon-ok-circle"></span> Menu 1</a></li>
                    <li><a data-toggle="tab" href="#menu2"><span className="glyphicon glyphicon-ok-circle"></span> Menu 2</a></li>
                    <li><a data-toggle="tab" href="#menu3"><span className="glyphicon glyphicon-ok-circle"></span> Menu 3</a></li>
                </ul>

                <div className="tab-content">
                    <div id="home" className="tab-pane fade in active">
                        <h4>HOME</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                        <h4>Menu 1</h4>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div id="menu2" className="tab-pane fade">
                        <h4>Menu 2</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </div>
                    <div id="menu3" className="tab-pane fade">
                        <h4>Menu 3</h4>
                        <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>
            </div>
        );
    }
}
