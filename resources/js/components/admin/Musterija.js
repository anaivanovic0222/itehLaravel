import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Musterija extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musterija: this.props.musterija,
            show: false
        };
        this.prikazi = this.prikazi.bind(this);
    }
    formaChangeHandler(e) {
        const name = e.target.getAttribute('name')
        const value = e.target.value;
        this.setState(prevState => ({
            musterija: {
                ...prevState.musterija,
                [name]: value
            }
        }))
    }

    update(e){
        Axios.put("http://127.0.0.1:8000/musterije/izmeni/" + this.state.musterija.id_musterija,{
            ime:this.state.musterija.ime,
            prezime:this.state.musterija.prezime,
            telefon:this.state.musterija.telefon,
            email:this.state.musterija.email,
        })
    }
    formaZaIzmenu() {
        if (this.state.show)
            return <tr>
                <td scope="row">{this.props.redniBr}</td>
                <td><input type="text" onChange={this.formaChangeHandler.bind(this)} value={this.state.musterija.ime} name="ime" ></input></td>
                <td><input type="text" onChange={this.formaChangeHandler.bind(this)} name="prezime" value={this.state.musterija.prezime}></input></td>
                <td><input type="text" onChange={this.formaChangeHandler.bind(this)} name="telefon" value={this.state.musterija.telefon}></input></td>
                <td><input type="text" onChange={this.formaChangeHandler.bind(this)} name="email" value={this.state.musterija.email}></input></td>
                <td><button type="button" name="" id="" onClick={this.update.bind(this)} class="btn btn-primary btn-lg btn-block">Posalji</button>
                    <button type="button" name="" id="" onClick={this.prikazi} class="btn btn-primary btn-lg btn-block">Prekid izmene</button></td>
            </tr>
        return <tr>
            <td scope="row">{this.props.redniBr}</td>
            <td>{this.state.musterija.ime}</td>
            <td>{this.state.musterija.prezime}</td>
            <td>{this.state.musterija.telefon}</td>
            <td>{this.state.musterija.email}</td>
            <td><button type="button" name="" id="" onClick={this.prikazi} class="btn btn-primary btn-lg btn-block">Izmeni</button></td>
        </tr>


    }
    prikazi() {
        this.setState({ show: !this.state.show })
    }
    render() {
        return (
            this.formaZaIzmenu()
        );
    }
}

if (document.getElementById('musterija')) {
    ReactDOM.render(<Musterija />, document.getElementById('musterija'));
}
