import React from  'react'
import Collection from 'react-materialize/lib/Collection'
import CollectionItem from 'react-materialize/lib/CollectionItem'
import Card from 'react-materialize/lib/Card'
import './pharm.css'
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

class Pharm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simptomInfo: [],
            meds: [],
            pharmacy: []
        }
    }
    findUserPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(position);
            }, error => {
                console.log(error);
            });
        });
    }
    async componentDidMount() {
        axios.get(`http://localhost:4000/pharmacy/simptoms?s=`+this.props.match.params.simptom)
            .then(res => {
                this.setState({simptomInfo: res.data});
                this.setState({meds: res.data.medicaments});
            });
        const position = await this.findUserPosition();
        const opt = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        axios.post('http://localhost:4000/pharmacy/near', opt)
            .then(response => {
                this.setState({pharmacy: response.data});
            });
    }
    render () {
        return (
            <section className="Pharm">
                <div className="container">
                    <Card textClassName='black-text'
                          title='Запис до лікаря'
                          actions={[<a href='#'>Записатись на прийом</a>]}>
                        I am a very simple card.
                    </Card>
                    <Card textClassName='black-text'
                          title='Ймовірна хвороба'>
                        {this.state.simptomInfo.illness}
                    </Card>
                    <Collection header='Ліки, які допоможуть'>
                        { this.state.meds.map(med => <CollectionItem>{med}</CollectionItem>)}
                    </Collection>
                    <BootstrapTable>
                        <TableHeaderColumn dataField='name' isKey>Product ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='place'>Product Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='workHours'>Product Price</TableHeaderColumn>
                        <TableHeaderColumn dataField='medicaments'>Product Price</TableHeaderColumn>
                        <TableHeaderColumn dataField='count'>Product Price</TableHeaderColumn>
                        <TableHeaderColumn dataField='workHours'>Product Price</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </section>
        )
    }
}

export default Pharm