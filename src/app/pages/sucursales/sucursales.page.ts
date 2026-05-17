import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterLink, AppHeaderComponent, AppFooterComponent]
})
export class SucursalesPage implements OnInit {

  sucursales: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const localId = this.route.snapshot.paramMap.get('id');

    fetch(`https://foodplease-production.up.railway.app/api/sucursales/?local=${localId}`)
      .then(response => response.json())
      .then(data => {
        console.log('Sucursales:', data);
        this.sucursales = data;
      })
      .catch(error => {
        console.error('Error cargando sucursales:', error);
      });
  }
}
