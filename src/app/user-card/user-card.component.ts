import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, AfterViewInit {
  @Input() user

  faAddressCard = faMapMarkerAlt;
  faUser = faUser;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let lat = this.user.address.geolocation.lat;
    let long = this.user.address.geolocation.long;
    const myfrugalmap = L.map('mapid'+this.user.id).setView([lat,long], 6);
   
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);
    let marker = L.marker([lat, long]).addTo(myfrugalmap);
  }
}
