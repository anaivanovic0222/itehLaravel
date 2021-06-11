import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MaserSelect extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <option  value={this.props.maser.id_maser}>{this.props.maser.ime}</option>
        );
    }
}

if (document.getElementById('maser_select')) {
    ReactDOM.render(<MaserSelect />, document.getElementById('maser_select'));
}
