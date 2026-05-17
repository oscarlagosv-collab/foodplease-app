import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonicModule
} from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-direccion',
  templateUrl: './seleccionar-direccion.page.html',
  styleUrls: ['./seleccionar-direccion.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class SeleccionarDireccionPage {

  direccion = '';
  comuna = '';
  region = '';

  sugerencias: any[] = [];

  direccionSeleccionada = false;

  constructor(private router: Router) {}

  async buscarDireccion() {

    const query = this.direccion.trim();

    this.direccionSeleccionada = false;

    if (query.length < 3) {
      this.sugerencias = [];
      return;
    }

    try {

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=cl&addressdetails=1&limit=5`
      );

      const data = await response.json();

      this.sugerencias = data;

    } catch (error) {
      console.error(error);
    }
  }

  seleccionarDireccion(lugar: any) {

    this.direccion = lugar.display_name;

    this.comuna =
      lugar.address.city ||
      lugar.address.town ||
      lugar.address.village ||
      lugar.address.suburb ||
      '';

    this.region =
      lugar.address.state || '';

    this.sugerencias = [];

    this.direccionSeleccionada = true;
  }

  confirmarDireccion() {

    if (
      !this.direccion ||
      !this.comuna ||
      !this.region ||
      !this.direccionSeleccionada
    ) {
      alert('Debes seleccionar una dirección válida.');
      return;
    }

    localStorage.setItem(
      'direccionCliente',
      this.direccion
    );

    localStorage.setItem(
      'comunaCliente',
      this.comuna
    );

    localStorage.setItem(
      'regionCliente',
      this.region
    );

    localStorage.removeItem('modoVitrina');

    this.router.navigate(['/principal']);
  }

  soloVitrinear() {

    localStorage.setItem(
      'modoVitrina',
      'true'
    );

    localStorage.removeItem('direccionCliente');
    localStorage.removeItem('comunaCliente');
    localStorage.removeItem('regionCliente');

    this.router.navigate(['/principal']);
  }

}