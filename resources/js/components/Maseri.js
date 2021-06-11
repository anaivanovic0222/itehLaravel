import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Maser from './Maser';

export default class Maseri extends Component {

    constructor(props){
        super(props);
        this.state = {
            maseri:[]
        }
        this.getMaseri();
    }

    getMaseri(){
        Axios.get('http://127.0.0.1:8000/maseri/get').then(res=>{
            this.setState({maseri: res.data.maseri})
        })
    }
    

    render() {
        return (
            <div className="container">
                   <div className="row">
                     {this.state.maseri.map(maser=>{
                         return <Maser maser={maser}  key={maser.id_maser + maser.ime + maser.nivo_strucnosti} />
                        })}
                 </div>
            </div>
        );
    }
}

if (document.getElementById('maseri')) {
    ReactDOM.render(<Maseri />, document.getElementById('maseri'));
}
