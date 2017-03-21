import React, { Component } from 'react';
import PageTitle from './page_title';
import Seperator from './seperator';
import Tabs from './tabs';
import Form from './form';
import DatePicker from './date_picker';
import TimePicker from './time_picker';
import Table from './table';

export default class PageContent extends Component {
    render() {
        return (
            <div className="col-md-9">
                <PageTitle />
                <Seperator />
                <Tabs />
                <Seperator />
                <Form />
                <Seperator />
                <DatePicker />
                <Seperator />
                <TimePicker />
                <Seperator />
                <Table />
                <Seperator />
            </div>
        );
    }
}
