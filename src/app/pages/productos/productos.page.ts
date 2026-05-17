import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, AppHeaderComponent, AppFooterComponent]
})
export class ProductosPage implements OnInit {

  productos: any[] = [];

  constructor(private route: ActivatedRoute) {}

ngOnInit() {
  
  const sucursalId = this.route.snapshot.paramMap.get('id');
  
  fetch(`http://127.0.0.1:8000/api/productos/?sucursal=${sucursalId}`)
    .then(response => response.json())
    .then(data => {
      console.log('Productos:', data);
      this.productos = data;
    })
    .catch(error => {
      console.error(error);
    });
  
  }

  agregarCarrito(producto: any) {

    const carrito = JSON.parse(
      localStorage.getItem('carrito') || '[]'
    );

    const existente = carrito.find(
      (item: any) => item.id === producto.id
    );

    if (existente) {
      existente.cantidad += 1;
    } else {
      carrito.push({
        ...producto,
        cantidad: 1
      });
    }

    localStorage.setItem(
      'carrito',
      JSON.stringify(carrito)
    );

    alert('Producto agregado al carrito');
  }

}