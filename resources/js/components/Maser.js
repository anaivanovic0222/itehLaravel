import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Maser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render() {
        return (
            <div className="col-3">

                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{this.props.maser.ime}</h4>
                        <h6 class="card-subtitle text-muted">Godine iskustva: {this.props.maser.godine_iskustva}</h6>
                    </div>
                    <img src="https://placeimg.com/100/100" alt={this.props.maser.ime}></img>
                    <div class="card-body">
                        <p class="card-text">
                            <b>Opis</b>
                            <br></br>
                            {this.props.maser.opis_masera}</p>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('maser')) {
    ReactDOM.render(<Maser />, document.getElementById('maser'));
}
