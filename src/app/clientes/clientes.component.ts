import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  constructor() { }
  cliente: Cliente = {
    nome: '',
    idade: 10
  };
  clientes = [];
  title = 'Página de clientes';

  addCliente() {
    this.clientes.push(this.cliente);
  }
}
