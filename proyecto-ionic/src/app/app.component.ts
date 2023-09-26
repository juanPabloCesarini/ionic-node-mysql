import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/inicio', icon: 'home' },
    { title: 'Productos', url: '/folder/productos', icon: 'bag' },
    { title: 'Favoritos', url: '/folder/favoritos', icon: 'star' },
    { title: 'Mi Cuenta', url: '/folder/mi cuenta', icon: 'person' },
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Mis Compras', url: '/folder/mis compras', icon: 'pricetags' },
    { title: 'Carrito', url: '/folder/carrito', icon: 'cart' },
  ];
  public labels = ['Promociones', 'Descuentos'];
  constructor() {}
}
