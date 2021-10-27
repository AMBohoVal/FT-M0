class Persona {
    constructor(nombre, apellido, edad, domicilio){
        // Crea el constructor:
      this.Nombre = nombre
      this.Apellido = apellido
      this.Edad = edad
      this.Domicilio = domicilio
    }
    
    detalle(){
      return {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        domicilio: this.domicilio
      }
    }

    let Persona = new Persona ("a", "b", 25, "Colombia");
