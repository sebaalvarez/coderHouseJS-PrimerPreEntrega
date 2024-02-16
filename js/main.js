alert("Bienvenido al sistema de OdontoMAX");
let opc = 0;
let conf = 0;

let atCorta;
let atMedia;
let atLarga;

let horasLun;
let horasMar;
let horasMie;
let horasJue;
let horasVie;

let dispLun = 0;
let dispMar = 0;
let dispMie = 0;
let dispJue = 0;
let dispVie = 0;

let turnosLun = "Turnos Lunes: ";
let turnosMar = "Turnos Martes: ";
let turnosMie = "Turnos Miércoles: ";
let turnosJue = "Turnos Jueves: ";
let turnosVie = "Turnos Viernes: ";

ini();

function ini() {
  while (opc != 5) {
    opc = Number(
      prompt(
        "Ingrese la opción: \n1.  Seteo Configuración \n2. Cargar Turnos \n3. Consulta Disponibilidad \n4. Reporte Turnos Asignados \n5. Salir"
      )
    );
    switch (opc) {
      case 1: // Seteo Configuración
        if (conf == 0) {
          seteoConfig();
        } else {
          alert(
            `Solo se puede setear los parámetros 1 vez, para cambiarlos debe salir y volver a ingresar al sistema\n Valores seteados: \n   - Horas Lunes: ${horasLun}\n   - Horas Martes: ${horasMar}\n   - Horas Miércoles: ${horasMie}\n   - Horas Jueves: ${horasJue}\n   - Horas Viernes: ${horasVie}\n   - Minutos Atención Corta: ${atCorta}\n   - Minutos Atención Media: ${atMedia}\n   - Minutos Atención Larga: ${atLarga}`
          );
        }
        break;

      case 2: // Carga Turnos
        if (conf != 0) {
          cargaTurno();
        } else {
          alert(
            "No se puede cargar turnos, primero debe setear la configuración"
          );
        }
        break;

      case 3: // Cns Disponibilidad
        alert(
          `Horas Disponible Lunes: ${dispLun}\nHoras Disponible Martes: ${dispMar}\nHoras Disponible Miércoles: ${dispMie}\nHoras Disponible Jueves: ${dispJue}\nHoras Disponible Viernes: ${dispVie}`
        );
        break;

      case 4: // Reporte de Turnos
        getTurnos();
        break;

      case 5: // Salir
        alert("Gracias por usar el sistema de OdontoMAX");
        break;

      default:
        opcionNoValida();
        break;
    }
  }
}

function seteoConfig() {
  horasLun = Number(prompt("Ingrese la cantidad de horas para el Lunes"));
  while (isNaN(horasLun) || horasLun < 0 || horasLun == "") {
    alert("Ingrese un número que sea mayor a 0");
    horasLun = Number(prompt("Ingrese la cantidad de horas para el Lunes"));
  }

  horasMar = Number(prompt("Ingrese la cantidad de horas para el Martes"));
  while (isNaN(horasMar) || horasMar < 0 || horasMar == "") {
    alert("Ingrese un número que sea mayor a 0");
    horasMar = Number(prompt("Ingrese la cantidad de horas para el Martes"));
  }

  horasMie = Number(prompt("Ingrese la cantidad de horas para el Miércoles"));
  while (isNaN(horasMie) || horasMie < 0 || horasMie == "") {
    alert("Ingrese un número que sea mayor a 0");
    horasMie = Number(prompt("Ingrese la cantidad de horas para el Miércoles"));
  }

  horasJue = Number(prompt("Ingrese la cantidad de horas para el Jueves"));
  while (isNaN(horasJue) || horasJue < 0 || horasJue == "") {
    alert("Ingrese un número que sea mayor a 0");
    horasJue = Number(prompt("Ingrese la cantidad de horas para el Jueves"));
  }

  horasVie = Number(prompt("Ingrese la cantidad de horas para el Viernes"));
  while (isNaN(horasVie) || horasVie < 0 || horasVie == "") {
    alert("Ingrese un número que sea mayor a 0");
    horasVie = Number(prompt("Ingrese la cantidad de horas para el Viernes"));
  }

  atCorta = Number(
    prompt("Ingrese la cantidad de minutos de la Atención Corta")
  );
  while (isNaN(atCorta) || atCorta < 0 || atCorta == "") {
    alert("Ingrese un número que sea mayor a 0");
    atCorta = Number(
      prompt("Ingrese la cantidad de minutos de la Atención Corta")
    );
  }

  atMedia = Number(
    prompt("Ingrese la cantidad de minutos de la Atención Media")
  );
  while (isNaN(atMedia) || atMedia < 0 || atMedia == "") {
    alert("Ingrese un número que sea mayor a 0");
    atMedia = Number(
      prompt("Ingrese la cantidad de minutos de la Atención Media")
    );
  }

  atLarga = Number(
    prompt("Ingrese la cantidad de minutos de la Atención Larga")
  );
  while (isNaN(atLarga) || atLarga < 0 || atLarga == "") {
    alert("Ingrese un número que sea mayor a 0");
    atLarga = Number(
      prompt("Ingrese la cantidad de minutos de la Atención Larga")
    );
  }

  dispLun = horasLun;
  dispMar = horasMar;
  dispMie = horasMie;
  dispJue = horasJue;
  dispVie = horasVie;

  conf = 1;
}

function cargaTurno() {
  let nombre;
  let dia;
  let tipoAtencion;

  nombre = prompt("Ingrese el nombre del paciente");

  dia = setDia();

  tipoAtencion = setTipoAtencion();

  while (armaListadoTurno(nombre, dia, tipoAtencion) == 0) {
    alert(
      `No hay disponibilidad para el día ${getNomDia(dia)}\nSeleccione otro día`
    );
    dia = setDia();
  }
}

function opcionNoValida() {
  alert(`Seleccionó una opción de menú no valida`);
}

function armaListadoTurno(nombre, dia, tipoAtencion) {
  switch (dia) {
    case 1:
      if (dispLun - duracionAtencion(tipoAtencion) < 0) {
        return 0;
      } else {
        dispLun = dispLun - duracionAtencion(tipoAtencion);
        turnosLun = turnosLun + armaTexto(nombre, tipoAtencion);
      }
      break;

    case 2:
      if (dispMar - duracionAtencion(tipoAtencion) < 0) {
        return 0;
      } else {
        dispMar = dispMar - duracionAtencion(tipoAtencion);
        turnosMar = turnosMar + armaTexto(nombre, tipoAtencion);
      }
      break;

    case 3:
      if (dispMie - duracionAtencion(tipoAtencion) < 0) {
        return 0;
      } else {
        dispMie = dispMie - duracionAtencion(tipoAtencion);
        turnosMie = turnosMie + armaTexto(nombre, tipoAtencion);
      }
      break;

    case 4:
      if (dispJue - duracionAtencion(tipoAtencion) < 0) {
        return 0;
      } else {
        dispJue = dispJue - duracionAtencion(tipoAtencion);
        turnosJue = turnosJue + armaTexto(nombre, tipoAtencion);
      }
      break;

    case 5:
      if (dispVie - duracionAtencion(tipoAtencion) < 0) {
        return 0;
      } else {
        dispVie = dispVie - duracionAtencion(tipoAtencion);
        turnosVie = turnosVie + armaTexto(nombre, tipoAtencion);
      }
      break;

    default:
      break;
  }
}

function armaTexto(nom, at) {
  return `\n   - Nombre: ${nom} - Atención: ${getNomAtencion(
    at
  )} (${duracionAtencion(at)} min.)`;
}

function getTurnos() {
  alert(
    `${turnosLun}\n${turnosMar}\n${turnosMie}\n${turnosJue}\n${turnosVie}\n`
  );
}

function duracionAtencion(tipoAtencion) {
  if (tipoAtencion == 1) return atCorta;
  if (tipoAtencion == 2) return atMedia;
  if (tipoAtencion == 3) return atLarga;
  return 0;
}

function getNomDia(dia) {
  if (dia == 1) return "Lunes";
  if (dia == 2) return "Martes";
  if (dia == 3) return "Miércoles";
  if (dia == 4) return "Jueves";
  if (dia == 5) return "Viernes";
  return "Día No Definido";
}

function getNomAtencion(at) {
  if (at == 1) return "Corta";
  if (at == 2) return "Media";
  if (at == 3) return "Larga";
  return "Atención No Definida";
}

function setDia() {
  let dia = Number(
    prompt(
      "Ingrese el día: 1.Lunes - 2.Martes - 3.Miércoles - 4.Jueves - 5.Viernes"
    )
  );
  while (isNaN(dia) || dia < 1 || dia > 5) {
    opcionNoValida();
    dia = Number(
      prompt(
        "Ingrese el día: 1.Lunes - 2.Martes - 3.Miércoles - 4.Jueves - 5.Viernes"
      )
    );
  }
  return dia;
}

function setTipoAtencion() {
  let tipoAtencion = Number(
    prompt("Ingrese el tipo de Atención: 1.Corta - 2.Media - 3.Larga")
  );

  while (isNaN(tipoAtencion) || tipoAtencion < 1 || tipoAtencion > 3) {
    opcionNoValida();
    tipoAtencion = Number(
      prompt("Ingrese el tipo de Atención: 1.Corta - 2.Media - 3.Larga")
    );
  }
  return tipoAtencion;
}
