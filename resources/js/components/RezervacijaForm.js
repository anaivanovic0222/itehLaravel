import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MaserSelect from './MaserSelect';

export default class RezervacijaForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maseri: []
        }
        this.getMaseri();
        this.submitHandler = this.submitHandler.bind(this);
    }

    getMaseri() {
        Axios.get('http://127.0.0.1:8000/maseri/get').then(res => {
            this.setState({ maseri: res.data.maseri })
        })
    }

    submitHandler(e) {
        e.preventDefault();
        Axios.post('http://127.0.0.1:8000/rezervacija/dodaj', {
            id_maser: this.state.id_maser,
            soba: this.state.soba,
            ugovoreno_vreme: this.state.ugovoreno_vreme,
            id_musterija: window.sessionStorage.getItem('id_musterija'),
        }).then(res=>{
            alert(res.data.poruka);
        })
    }

    formaChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }



    render() {
        return (
            <div className="container">
                <h4>Zakazite masazu popunjavanjem forme ispod
                </h4>
                <form onSubmit={this.submitHandler} className="form-group">
                    <div className="row">
                        <div className="col">
                            Koji vam termin odgovara
                   <br></br>
                            <input type="datetime-local" onChange={this.formaChangeHandler.bind(this)} name="ugovoreno_vreme" ></input>
                        </div>
                        <div className="col">
                            Odaberite masera
                    <br></br>
                            <select className="form-control" onChange={this.formaChangeHandler.bind(this)} name="id_maser" id="">

                                {this.state.maseri.map(maser => {
                                    return <MaserSelect maser={maser} key={maser.id_maser + maser.ime} />
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Odaberite sobu
                            <input type="number" min={1} max={25} onChange={this.formaChangeHandler.bind(this)} className="form-control" name="soba"></input>
                        </div>
                        <div className="col">
                            <br></br>
                            <input type="submit" className="form-control" value="Rezervisite" ></input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

if (document.getElementById('rezervacija_form')) {
    ReactDOM.render(<RezervacijaForm />, document.getElementById('rezervacija_form'));
}
