import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, AppHeaderComponent, AppFooterComponent]
})
export class CategoriasPage implements OnInit {

  categorias: any[] = [];
  
  ngOnInit() {
    fetch('http://127.0.0.1:8000/api/categorias/')
      .then(response => response.json())
      .then(data => {
      console.log('Categorías recibidas:', data);
      this.categorias = data;
    })
    .catch(error => {
      console.error('Error cargando categorías:', error);
    });
  }
}