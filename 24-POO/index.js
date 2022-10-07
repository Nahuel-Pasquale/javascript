class ClienteOBJ {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.movimientos = [];
  }

  tipoCliente(){
    let tipo;

    if(this.saldo > 1000) {
      tipo = 'Gold';
    } else if(this.saldo > 500) {
      tipo = 'Platinum';
    } else {
      tipo = 'Normal'
    }
    return tipo;
  }
  nombreClienteSaldo() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo: ${this.tipoCliente()}`
  }
}

ClienteOBJ.prototype.retirarSaldo = function(saldo) {
  this.saldo -= saldo;
}
// const cliente = new ClienteOBJ('Nahuel', 1000);
// console.log(cliente);


class Empresa {
  constructor(nombre, saldo) {
    this.nombre = nombre; // Empresa1
    this.saldo = saldo // 5000
  }

  imprimirSaldo() {
    return`Nombre: ${this.nombre}, Saldo: ${this.saldo}`
  }

  static bienvenida() {
    return `bienvenidos al cajero`
  }
}

class EmpresaCompleta extends Empresa {
  constructor(nombre, saldo, telefono, tipo){
    super(nombre, saldo)
    this.telefono = telefono;
    this.tipo = tipo
  }

  imprimirTelefono() {
    console.log(this.telefono)
  }
}

const empresa = new EmpresaCompleta('Empresa1', 5000, 123456789, 'Construccion')
// empresa.imprimirTelefono()
// console.log(Empresa.bienvenida())

const user = {
  name: 'Mati',
};

const producto = {
  name: 'Fifa',
};

function showInfo(pedidos, cuotas) {
  return `${this.name} tiene ${pedidos} pedidos en ${cuotas} cuotas`
}

// console.log(showInfo(3, 12))
// console.log(showInfo.call(user, 3, 12))
// console.log(showInfo.apply(user, [3, 12]))

// const nuevaFuncion = showInfo.bind(user);
// console.log(nuevaFuncion(19, 45000))

Array.prototype.getLastItem = function() {
  return this[this.length - 1];
}

console.log(Array.prototype);