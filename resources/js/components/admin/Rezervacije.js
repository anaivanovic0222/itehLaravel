import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Rezervacija from './Rezervacija';

export default class Rezervacije extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rezervacije: [],
            show: false
        }
        this.getRezervacije();
        this.rezervacije = this.rezervacije.bind(this);

    }
    getRezervacije() {
        Axios.get('http://127.0.0.1:8000/rezervacije/get').then(res => {
            this.setState({ rezervacije: res.data.rezervacije })
        })
    }

    prikaziRezervacije() {
        this.setState({ show: !this.state.show })

    }

    rezervacije() {
        
        if (this.state.show)
            return this.state.rezervacije.map((rezervacija, index) => {
               
                return <Rezervacija redniBr={index + 1} rezervacija={rezervacija} key={rezervacija.id_rezervacija + rezervacija.soba} />
            })
    }

    render() {
       
        return (
            <div className="container">
                <table class="table">
                    <thead onClick={this.prikaziRezervacije.bind(this)}>
                        <tr>
                            <th>Br.</th>
                            <th>Musterija</th>
                            <th>Maser</th>
                            <th>Vreme</th>
                            <th>Soba</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.rezervacije()}


                    </tbody>
                </table>

            </div>
        );

    }
}

if (document.getElementById('rezervacije')) {
    ReactDOM.render(<Rezervacije />, document.getElementById('rezervacije'));
}
