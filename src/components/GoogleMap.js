import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
/*import Search from './Searchbar/Search';*/

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      location:[{ id:1 , lat: 15.333959 , lng: 43.987661 , type:"Fast" , address:"Sana'a Governorate" , img:"./Location1.png"},
                { id:2 , lat: 16.611876 , lng: 45.886108 , type:"Slow" , address:"Al Jawf Governorate", img:"./location2.png"},
                { id:3 , lat: 15.486143 , lng: 47.889913 , type:"Free" , address:"Hadhramaut Governorate", img:"./location3.png"},
                { id:4 , lat: 14.846135 , lng: 45.912894 , type:"Fast" , address:"Shabwah Governorate",img:"./location4.png"},
                { id:5 , lat: 16.576395 , lng: 50.367170 , type:"Slow" , address:"Al Mahrah Governorate",img:"./location5.png"},
                { id:6 , lat: 17.056382 , lng: 43.765225 , type:"Free" , address:"Saada Governorate",img:"./location6.png"},
                { id:7 , lat: 12.940943 , lng: 43.849526 , type:"Slow" , address:"Lahij Governorate",img:"./location7.png"},
                { id:8 , lat: 14.244065,  lng: 43.164566 , type:"Slow" , address:"Al Hudaydah Governorate",img:"./location8.png"},
                { id:9 , lat: 13.458117,  lng: 45.609489 , type:"Fast" , address:"Abyan Governorate",img:"./location9.png"},
                { id:10 , lat: 17.138689, lng: 45.519192 , type:"Slow" , address:"Al Jawf Governorate",img:"./location10.png"},
                { id:11 , lat: 18.081425, lng: 48.390758 , type:"Free" , address:"Hadhramaut Governorate",img:"./location11.png"},
                { id:12 , lat: 18.589659, lng: 51.762269 , type:"Free" , address:"Al Mahrah Governorate",img:"./location12.png"},
                { id:13 , lat: 16.204058, lng: 42.936488 , type:"Fast" , address:"Hajjah Governorate",img:"./location13.png"},
                { id:14 , lat: 15.124264, lng: 50.175228 , type:"Fast" , address:"Hadhramaut Governorate",img:"./location14.png"},
                { id:15 , lat: 15.644161, lng: 51.742056 , type:"Slow" , address:"Al Mahrah Governorate",img:"./location15.png"},
                { id:16 , lat: 16.199013, lng: 47.143395 , type:"Free" , address:"Hadhramaut Governorate",img:"./location16.png"},
                { id:17 , lat: 14.873887, lng: 46.665403 , type:"Fast" , address:"Shabwah Governorate",img:"./location17.png"},
                { id:18 , lat: 15.478340, lng: 45.385309 , type:"Free" , address:"Ma'rib Governorate",img:"./location18.png"},
                { id:19 , lat: 14.173806, lng: 45.219933 , type:"Slow" , address:"Al Bayda' Governorate",img:"./location19.png"},
                { id:20 , lat: 14.319669, lng: 46.928732 , type:"Slow" , address:"Shabwah Governorate",img:"./location20.png"}
      ],
      search:""
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  displayMarker = () => {
    return this.state.location.map( location=>{
      return <Marker key={location.id}  position={{
        lat:location.lat,
        lng:location.lng
      }} type={location.type} address={location.address} img={location.img}
      onClick={this.onMarkerClick}/>
    })
  }
  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});
  }

  render() {
    const style = {
      width: '100%',
      height:'100%',
    }
    let filteredContacts = this.state.location.filter(
      (location) => {
        return location.address.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <>
      <form>
      <input value={this.state.search} onChange={this.updateSearch.bind(this)} />
      </form>
      <Map
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 15.5527, lng: 48.5164 }}
        disableDefaultUI = {true} 
      >
      {filteredContacts.map( location=>{
         return <Marker key={location.id}  position={{
           lat:location.lat,
           lng:location.lng
         }} type={location.type} address={location.address} img={location.img}
         onClick={this.onMarkerClick}/>
       })}
       
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <div>
            <img src={`/Picture/${this.state.selectedPlace.img}`} alt="" />
            <h2>{this.state.selectedPlace.address}</h2>
            <h3>{this.state.selectedPlace.type}</h3>
          </div>
        </InfoWindow>
      </Map>
      </>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDL4YopF5CO1tvYxPhImg3p2ktm5zqeq58'
})(GoogleMapsContainer)