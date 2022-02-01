//1. Crear las clases en ES6 respetando la Herencia indicada en el diagrama de clases.
class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    //4. Crear el método “datosPropietario” en la clase correspondiente y que pueda ser accedido desde las clases inferiores.
    datosPropietario() {
        return `El nombre del dueño es: ${this._nombre}.El domicilio es: ${this._direccion}, y el numero telefonico de contacto: ${this._telefono}.`;
    }
}
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    //3. Crear un método get para la clase Animal de la propiedad tipo para retornar el mensaje “El tipo de animal es un: ${this.tipo}”.
    get() {
        return this._tipo;
    }
    infoTipo() {
        return `El tipo de animal es un: ${this._tipo}`
    }
}
class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreM, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreM = nombreM;
        this._enfermedad = enfermedad;
    }
    //2. Crear los métodos get y set para la clase de mascota.
    get nombreM() {
        return this._nombreM;
    }
    set nombreM(nuevo_nombreM) {
        this._nombreM = nuevo_nombreM;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(nuevo_enfermedad) {
        this._enfermedad = nuevo_enfermedad;
    }
}

//Test
/*
let perro1 = new Mascota("Damian", "pasaje123", 98765432, "Perro", "Balto", "dolor de guatita");

console.log(perro1.datosPropietario());
console.log(perro1._nombre);
console.log(perro1._direccion);
console.log(perro1._telefono);
console.log(perro1._tipo);
console.log(perro1._nombreM);
console.log(perro1._enfermedad);
*/

/*
5. Captar los elementos del formulario con JavaScript e identificar el tipo de animal
para realizar la instancia dependiendo del tipo de animal seleccionado. Es decir, si el
usuario selecciona Gato, la instancia a crear para la clase Mascota debe tener el
nombre de “Gato”, si selecciona Perro, la instancia de Mascota deberá llamarse
“Perro”
*/

let formulario = document.querySelector(`form`)

let registro = (e) => {
    e.preventDefault();

    let prop = document.getElementById(`propietario`).value;
    let tele = document.getElementById(`telefono`).value;
    let dire = document.getElementById(`direccion`).value;
    let nomM = document.getElementById(`nombreMascota`).value;
    let tipo = document.getElementById(`tipo`).value;
    let enfe = document.getElementById(`enfermedad`).value;

    //Test
    /*
    console.log(prop);
    console.log(tele);
    console.log(dire);
    console.log(tipo);
    console.log(enfe);
    */
    switch (tipo) {
        case "perro":
            let perro = new Mascota(prop, dire, tele, tipo, nomM, enfe);
            verResult(perro);
            break
        case "gato":
            let gato = new Mascota(prop, dire, tele, tipo, nomM, enfe);
            verResult(gato);
            break
        case "conejo":
            let conejo = new Mascota(prop, dire, tele, tipo, nomM, enfe);
            verResult(conejo);
            break
    }
}
/*
6. Mostrar a modo de lista los mensajes resultantes para el método “datosPropietario”
cuando el usuario haga un clic sobre el botón Agregar, accediendo a los métodos get
de las clases Animal y Mascota, concatenando todo en un solo mensaje, como se
muestra en la imagen a continuación:
*/
let verResult = (valor) => {
    let resultado = document.querySelector(`#resultado ul`)
    resultado.innerHTML = "";
    let li1 = document.createElement(`li`)
    li1.innerHTML = `${valor.datosPropietario()}`;
    let li2 = document.createElement(`li`)
    li2.innerHTML = `El tipo de animal es un : ${valor._tipo}, mientras que el nombre de la mascota es: ${valor._nombreM} y la enfermedad es: ${valor._enfermedad}.`

    resultado.appendChild(li1)
    resultado.appendChild(li2)
}

formulario.addEventListener(`submit`, registro);


