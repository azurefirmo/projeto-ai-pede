import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Platform } from '@ionic/angular';

declare const google: any;

interface BakeryLocation {
  nome: string;
  lat: number;
  lng: number;
}

@Component({
  standalone: false,
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss']
})
export class LocationPage implements OnInit {
  map: any;
  isLoading = true;
  errorMessage = '';

  readonly padarias: BakeryLocation[] = [
    { nome: 'Restaurante e Panificadora Modelo', lat: -5.091721, lng: -42.813623 },
    { nome: 'Modelo Campos Sales', lat: -5.084293, lng: -42.845908 },
    { nome: 'Alimentar', lat: -5.095978, lng: -42.799370 },
    { nome: 'Cristo Rei', lat: -5.097414, lng: -42.789276 },
    { nome: 'Ideal', lat: -5.077525, lng: -42.794664 },
    { nome: 'Sal e Brisa', lat: -5.077528, lng: -42.801597 },
    { nome: 'Fortaleza', lat: -5.076315, lng: -42.811296 }
  ];

  constructor(private platform: Platform, private geolocation: Geolocation) {}

  ngOnInit(): void {
    this.platform.ready().then(() => this.initPage());
  }

  private initPage(): void {
    if (typeof google === 'undefined' || !google.maps) {
      this.showError('O mapa não foi carregado. Verifique a chave e a conexão.');
      return;
    }

    this.geolocation.getCurrentPosition().then(position => {
      this.loadMap(position.coords.latitude, position.coords.longitude);
    }).catch(() => {
      this.showError('Não foi possível obter sua localização. Verifique as permissões.');
    });
  }

  private loadMap(lat: number, lng: number): void {
    const element = document.getElementById('map');
    if (!element) {
      this.showError('Não foi possível encontrar a área do mapa.');
      return;
    }

    const center = new google.maps.LatLng(lat, lng);
    this.map = new google.maps.Map(element, {
      center,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    });

    const currentMarker = new google.maps.Marker({
      position: center,
      title: 'Você',
      icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
    });
    currentMarker.setMap(this.map);
    this.addInfoWindow(currentMarker);

    for (const padaria of this.padarias) {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(padaria.lat, padaria.lng),
        title: padaria.nome,
        icon: 'https://i.imgur.com/T43eu9X.png'
      });
      marker.setMap(this.map);
      this.addInfoWindow(marker);
    }

    this.isLoading = false;
  }

  private addInfoWindow(marker: any): void {
    const infoWindow = new google.maps.InfoWindow({
      content: `<strong>${marker.title}</strong>`
    });
    marker.addListener('click', () => infoWindow.open({ map: this.map, anchor: marker }));
  }

  private showError(message: string): void {
    this.isLoading = false;
    this.errorMessage = message;
  }
}
