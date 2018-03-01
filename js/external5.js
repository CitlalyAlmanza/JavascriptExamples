function verificarEdad(edad) {
    if (edad > 18) {
      return true;
    } else {
      return confirm('Tienes permiso de tus padres?');
    }
  }
  
  var edad = prompt('Que edad tienes?', 18);
  
  if ( verificarEdad(edad) ) {
    alert( 'Acceso permitido' );
  } else {
    alert( 'Acceso denegado' );
  }

// sacar la ruta del archivo