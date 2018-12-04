import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Project';
  cliente = '';
  clientes = [];

  addCliente() {
    this.clientes.push(this.cliente);
    console.log(this.clientes);
  }
}
