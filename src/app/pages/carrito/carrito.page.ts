import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, AppHeaderComponent, AppFooterComponent]
  
})
export class CarritoPage implements OnInit {

  carrito: any[] = [];
  total = 0;

  ngOnInit() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '[]');

    this.total = this.carrito.reduce((suma, item) => {
      return suma + item.precio * item.cantidad;
    }, 0);
  }

  aumentar(item: any) {
    item.cantidad += 1;
    this.guardar();
  }

  disminuir(item: any) {
    item.cantidad -= 1;

    if (item.cantidad <= 0) {
      this.carrito = this.carrito.filter(p => p.id !== item.id);
    }

    this.guardar();
  }

  eliminar(item: any) {
    this.carrito = this.carrito.filter(p => p.id !== item.id);
    this.guardar();
  }

  guardar() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    this.cargarCarrito();
  }

  vaciarCarrito() {
    localStorage.removeItem('carrito');
    this.cargarCarrito();
  }
}