import React, { Component } from 'react';

export default class Table extends Component {
    render() {
        return (
            <div className="col-md-12">
                <h3>Table</h3>
                <div className="spacer"></div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">1</td>
                            <td>Thushara</td>
                            <td>Sathkumara</td>
                            <td>smtsampath</td>
                        </tr>
                        <tr>
                            <td className="text-center">2</td>
                            <td>Justin</td>
                            <td>LeClair</td>
                            <td>justinleclairz</td>
                        </tr>
                        <tr>
                            <td className="text-center">3</td>
                            <td>Leonard</td>
                            <td>Reese</td>
                            <td>BirdFaceBreath</td>
                        </tr>
                        <tr>
                            <td className="text-center">4</td>
                            <td>Lior</td>
                            <td>Gavra</td>
                            <td>lgavraap</td>
                        </tr>
                    </tbody>
                </table>
                <div className="spacer"></div>
            </div>
        );
    }
}
