import React, { Component } from 'react';

export default class SideBar extends Component {
    render() {
        return (
            <div className="col-md-3">
                <h3>Sidebar</h3>
                <ul className="nav nav-list">
                    <li><label className="tree-toggler nav-header">Tabs</label></li>
                    <li><label className="tree-toggler nav-header">Forms</label></li>
                    <li><label className="tree-toggler nav-header">Date Picker</label></li>
                    <li><label className="tree-toggler nav-header">Time Picker</label></li>
                    <li><label className="tree-toggler nav-header">Accordion</label></li>
                    <li className="divider"></li>
                    <li><label className="tree-toggler nav-header">Cards</label>
                        <ul className="nav nav-list tree">
                            <li><a href="#">Card Style A</a></li>
                            <li><a href="#">Card Style B</a></li>
                        </ul>
                    </li>
                    <li><label className="tree-toggler nav-header">Footer</label></li>
                </ul>
            </div>
        );
    }
}
