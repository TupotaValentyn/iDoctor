import React from  'react'
import Collection from 'react-materialize/lib/Collection'
import CollectionItem from 'react-materialize/lib/CollectionItem'
import Card from 'react-materialize/lib/Card'
import './pharm.css'
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pharmacy: []
        }
    }
    componentDidUpdate(prevState){
        if (prevState.lat !== this.props.lat){
            const userPos = new window.google.maps.LatLng(this.props.lat, this.props.lng)
            this.map.setCenter(userPos);
        }
        if (prevState.markers !== this.props.markers && typeof this.props.markers == 'object') {
            this.setState({pharmacy: this.props.markers});
        }
    }
    componentDidMount(){
        this.map = this.googleMap.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    }
    render() {
        return <GoogleMap
            defaultZoom={15}
            defaultCenter={{lat: this.props.lat || 49.431840699999995, lng: this.props.lng || 32.056871199999996}}
            ref={map => {this.googleMap = map}}
        >
            {this.state.pharmacy.map((ph) =>{
                return <Marker
                    position={{lat: ph.geometry.location.lat, lng: ph.geometry.location.lng}}
                    icon={{url: 'https://u.imageresize.org/873b8269-1b6b-41ee-8a6e-1ca08854ff3a.png'}}
                />
            })}
            <Marker
                position={{lat: this.props.lat || 49.431840699999995, lng: this.props.lng || 32.056871199999996}}
            />

        </GoogleMap>
    }
}

const MapWithAMarker = withGoogleMap(Map);

class Pharm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            simptomInfo: [],
            meds: [],
            pharmacy: [],
            coords: [],
            medicamentsFull: []
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
        this.setState({coords: opt});
        axios.post('http://localhost:4000/pharmacy/near', opt)
            .then(response => {
                this.setState({pharmacy: response.data.apt});
                this.setState({medicamentsFull: response.data.med});
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
                    <BootstrapTable className="Table" data={this.state.medicamentsFull}>
                        <TableHeaderColumn dataField='m_name' isKey  tdStyle={{'background': '#f6f6f6', 'border': '1px solid red', 'padding': '20px 25px'}}>Препарат</TableHeaderColumn>
                        <TableHeaderColumn dataField='m_price'>Ціна (грн)</TableHeaderColumn>
                        <TableHeaderColumn dataField='m_available'>Наявність</TableHeaderColumn>
                        <TableHeaderColumn dataField='apt_name'>Аптека</TableHeaderColumn>
                        <TableHeaderColumn dataField='apt_place'>Місце розташування</TableHeaderColumn>
                        <TableHeaderColumn dataField='apt_time'>Час роботи (год)</TableHeaderColumn>
                    </BootstrapTable>
                    <Card title='Найближчі аптеки'>
                        <MapWithAMarker
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                                             lat={this.state.coords.lat}
                                             lng={this.state.coords.lng}
                            markers={this.state.pharmacy}/>
                    </Card>
                </div>
            </section>
        )
    }
}

export default Pharm