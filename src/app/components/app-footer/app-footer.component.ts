import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink]
})
export class AppFooterComponent implements OnInit {

  cantidadCarrito = 0;

  ngOnInit() {
    this.actualizarCarrito();
  }

  ionViewWillEnter() {
    this.actualizarCarrito();
  }

  actualizarCarrito() {

    const carrito = JSON.parse(
      localStorage.getItem('carrito') || '[]'
    );

    this.cantidadCarrito = carrito.reduce(
      (total: number, item: any) =>
        total + item.cantidad,
      0
    );
  }
}