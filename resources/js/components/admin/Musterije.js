import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Musterija from './Musterija';

export default class Musterije extends Component {

    constructor(props) {
        super(props);
        this.state = {
            musterije: [],
            show: false
        }
        this.getMusterije();
        this.musterije = this.musterije.bind(this);

    }
    getMusterije() {
        Axios.get('http://127.0.0.1:8000/musterije/get').then(res => {
            this.setState({ musterije: res.data.musterije })
        })
    }

    prikaziMusterije() {
        this.setState({ show: !this.state.show })

    }

    musterije() {
        if (this.state.show)
            return this.state.musterije.map((musterija, index) => {
                return <Musterija redniBr={index + 1} musterija={musterija} key={musterija.id_musterija} />
            })
    }

    render() {
        return (
            <div className="container">
                <table class="table">
                    <thead onClick={this.prikaziMusterije.bind(this)}>
                        <tr>
                            <th>Br.</th>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Broj telefona</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.musterije()}


                    </tbody>
                </table>

            </div>
        );

    }
}

if (document.getElementById('musterije')) {
    ReactDOM.render(<Musterije />, document.getElementById('musterije'));
}
