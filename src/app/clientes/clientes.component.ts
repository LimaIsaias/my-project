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
    idade: null
  };
  clientes = [];
  title = 'Página de clientes';

  addCliente() {
    // Cria um objeto novo a cada vez que a função é executada
    const clienteNovo = Object.assign({}, this.cliente);
    this.clientes.push(clienteNovo);
  }
}
