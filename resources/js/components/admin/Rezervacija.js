import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Rezervacija extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }
    delete() {
        Axios.delete("http://127.0.0.1:8000/rezervacije/delete/" + this.props.rezervacija.id_rezervacija)
        this.setState({show:false})
    }
    rezervacija() {
        if (this.state.show) 
            return (<tr> <td scope="row">{this.props.redniBr}</td>
            <td>{this.props.rezervacija.musterija.ime + " " + this.props.rezervacija.musterija.prezime}</td>
            <td>{this.props.rezervacija.maser.ime}</td>
            <td>{this.props.rezervacija.ugovoreno_vreme}</td>
            <td>{this.props.rezervacija.soba}</td>
            <td><button type="button" onClick={this.delete.bind(this)} class="btn btn-danger btn-lg btn-block">X</button></td>
        </tr>)
        return "Izbrisana rezervacija"
    }
    render() {
    
        return (
                this.rezervacija()
        );
    }
}

if (document.getElementById('rezervacija')) {
    ReactDOM.render(<Rezervacija />, document.getElementById('rezervacija'));
}
