import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MaserSelect from './MaserSelect';

export default class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
        this.submitHandler = this.submitHandler.bind(this);
        this.validation = this.validation.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        if (this.validation())
            Axios.post("http://127.0.0.1:8000/musterije/dodaj",
                {
                    ime: this.state.ime,
                    prezime: this.state.prezime,
                    telefon: this.state.telefon,
                    email: this.state.email,
                }).then(res => {
                    window.sessionStorage.setItem('id_musterija', res.data.id_musterija);
                    alert(res.data.poruka);
                });
    }

    validation() {
        if (
            this.state.ime == "" ||
            this.state.prezime == "" ||
            this.state.telefon == "" ||
            this.state.email == ""
        ) { alert("Sva polja moraju biti popunjena"); return false; }
        return true;
    }

    formaChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }



    render() {
        return (
            <div className="container">
                <h4>Ulogujte se</h4>
                <form onSubmit={this.submitHandler} className="form-group">
                    <div className="row">
                        <div className="col">
                            <label>Ime</label>
                            <input type="text" className="form-control" onChange={this.formaChangeHandler.bind(this)} name="ime"></input>

                        </div>

                        <div className="col">

                            <label>Prezime</label>
                            <input type="text" className="form-control" onChange={this.formaChangeHandler.bind(this)} name="prezime"></input>



                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Broj telefona</label>
                            <input type="text" className="form-control" onChange={this.formaChangeHandler.bind(this)} name="telefon"></input>
                        </div>

                        <div className="col">
                            <label>Email adresa</label>
                            <input type="text" className="form-control" onChange={this.formaChangeHandler.bind(this)} name="email"></input>
                        </div>
                    </div>
                    <br></br>
                    <div className="row justify-content-center">

                        <div className="col-4">
                            <input type="submit" className="form-control" value="Login"></input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

if (document.getElementById('login_form')) {
    ReactDOM.render(<LoginForm />, document.getElementById('login_form'));
}
