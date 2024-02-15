# Simulador interactivo

## Consigna:

- Aplicar todos los conocimientos vistos hasta el momento

**Se entiende por simulador un programa donde**

- El usuario ingresa uno o mas datos (pedidos por el programa)
- El programa realiza algun tipo de proceso (calculo, pedir mas datos, etc)
- El programa muestra uno o mas datos de interes (de lo que sea que haya hecho claro)

## Formato:

- HTML con el js BIEN linkeado 👀
- A ser posible, entreguen usando github
- Sean ordenados con los nombres de las entregas, archivos, etc

## Proyecto seleccionado:

Carga de turnos de un consultorio odontológico
Funcionalidad:

- Contar con un menú para las siguientes acciones

  1. Seteo de configuración inicial

     - Ingresar la cantidad de horas de atención para cada día de la semana (de lunes a viernes)
     - Ingresar la duración de cada turno de acuerdo al tipo de atención

  2. Carga de turnos
     - Día de la semana
     - Nombre del paciente
     - Tipo de atención
  3. Consulta horas disponibles por día
     - listado de días y horas con turnos y horas sin turnos
  4. Reporte de turnos asignados
     - Listado de turnos asignados por día donde se muestre Nombre | tipo de atención
  5. Salir del sistema

---

Consideraciones:

- Los turnos se agendan de acuerdo a los ingresos (no se asignan por horarios)
- Cuando se cumple la cantidad de horas de atención para un día se debe informar que no se permiten registrar más turnos para dicho día informando la disponibilidad de horas para los otros días
