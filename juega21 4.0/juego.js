class Palo {
    constructor(figura) {
        this.figura = figura;
    }
}
class Carta {
    constructor(palo, valor, rotulo) {
        this.palo = palo;
        this.valor = valor;
        this.rotulo = rotulo;

    }
}
class FabricaCartas {
    palos = [new Palo('picas'), new Palo('diamantes'), new Palo('treboles'), new Palo('corazones')];
    letras = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    mazo = [];
    mezclar() {
        this.mazo = this.mazo.sort(function() { return Math.random() - 0.5 });
        console.log(this.mazo)
    }
    crear() {
        this.palos.forEach(function(element1) {
            this.letras.forEach(function callback(element2, index2) {
                if (index2 == 0) {
                    this.mazo.push(new Carta(element1,[1 || 11], element2));
                } else
                if (index2 > 9) {
                    this.mazo.push(new Carta(element1, [10], element2));
                } else {

                    this.mazo.push(new Carta(element1, index2, element2));
                }

            }, this);
        }, this);
        console.log(this.mazo)
    }
}
class Jugador {
    constructor(nombre, nuevoMazo = []) {
        this.nombre = nombre;
        this.nuevoMazo = nuevoMazo;
    }
    pedir(getPidiendo) {

        if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '2corazones') {
            document.getElementById("dos").style.display = "block";
            setTimeout(function() { document.getElementById("dos").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '3corazones') {
            document.getElementById("tres").style.display = "block";
            setTimeout(function() { document.getElementById("tres").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '4corazones') {
            document.getElementById("cuatro").style.display = "block";
            setTimeout(function() { document.getElementById("cuatro").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '5corazones') {
            document.getElementById("cinco").style.display = "block";
            setTimeout(function() { document.getElementById("cinco").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '6corazones') {
            document.getElementById("seis").style.display = "block";
            setTimeout(function() { document.getElementById("seis").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '7corazones') {
            document.getElementById("siete").style.display = "block";
            setTimeout(function() { document.getElementById("siete").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '8corazones') {
            document.getElementById("ocho").style.display = "block";
            setTimeout(function() { document.getElementById("ocho").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '9corazones') {
            document.getElementById("nueve").style.display = "block";
            setTimeout(function() { document.getElementById("nueve").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '10corazones') {
            document.getElementById("diez").style.display = "block";
            setTimeout(function() { document.getElementById("diez").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Jcorazones') {
            document.getElementById("once").style.display = "block";
            setTimeout(function() { document.getElementById("once").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Qcorazones') {
            document.getElementById("doce").style.display = "block";
            setTimeout(function() { document.getElementById("doce").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Kcorazones') {
            document.getElementById("trece").style.display = "block";
            setTimeout(function() { document.getElementById("trece").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Acorazones') {
            document.getElementById("catorse").style.display = "block";
            setTimeout(function() { document.getElementById("catorse").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Adiamantes') {
            document.getElementById("quince").style.display = "block";
            setTimeout(function() { document.getElementById("quince").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '2diamantes') {
            document.getElementById("dieciseis").style.display = "block";
            setTimeout(function() { document.getElementById("dieciseis").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '3diamantes') {
            document.getElementById("diecisiete").style.display = "block";
            setTimeout(function() { document.getElementById("diecisiete").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '4diamantes') {
            document.getElementById("dieciocho").style.display = "block";
            setTimeout(function() { document.getElementById("dieciocho").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '5diamantes') {
            document.getElementById("diecinueve").style.display = "block";
            setTimeout(function() { document.getElementById("diecinueve").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '6diamantes') {
            document.getElementById("veinte").style.display = "block";
            setTimeout(function() { document.getElementById("veinte").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '7diamantes') {
            document.getElementById("veintiuno").style.display = "block";
            setTimeout(function() { document.getElementById("veintiuno").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '8diamantes') {
            document.getElementById("veintidos").style.display = "block";
            setTimeout(function() { document.getElementById("veintidos").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '9diamantes') {
            document.getElementById("veintitres").style.display = "block";
            setTimeout(function() { document.getElementById("veintitres").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '10diamantes') {
            document.getElementById("veinticuatro").style.display = "block";
            setTimeout(function() { document.getElementById("veinticuatro").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Jdiamantes') {
            document.getElementById("veinticinco").style.display = "block";
            setTimeout(function() { document.getElementById("veinticinco").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '') {
            document.getElementById("veintiseis").style.display = "block";
            setTimeout(function() { document.getElementById("veintiseis").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Kdiamantes') {
            document.getElementById("veintisiete").style.display = "block";
            setTimeout(function() { document.getElementById("veintisiete").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Apicas') {
            document.getElementById("veintiocho").style.display = "block";
            setTimeout(function() { document.getElementById("veintiocho").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '2picas') {
            document.getElementById("veintinueve").style.display = "block";
            setTimeout(function() { document.getElementById("veintinueve").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '3picas') {
            document.getElementById("treinta").style.display = "block";
            setTimeout(function() { document.getElementById("treinta").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '4picas') {
            document.getElementById("treintayuno").style.display = "block";
            setTimeout(function() { document.getElementById("treintayuno").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '5picas') {
            document.getElementById("treintaydos").style.display = "block";
            setTimeout(function() { document.getElementById("treintaydos").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '6picas') {
            document.getElementById("treintaytres").style.display = "block";
            setTimeout(function() { document.getElementById("treintaytres").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '7picas') {
            document.getElementById("treintaycuatro").style.display = "block";
            setTimeout(function() { document.getElementById("treintaycuatro").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '8picas') {
            document.getElementById("treintaycinco").style.display = "block";
            setTimeout(function() { document.getElementById("treintaycinco").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '9picas') {
            document.getElementById("treintayseis").style.display = "block";
            setTimeout(function() { document.getElementById("treintayseis").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '10picas') {
            document.getElementById("treintaysiete").style.display = "block";
            setTimeout(function() { document.getElementById("treintaysiete").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Jpicas') {
            document.getElementById("treintayocho").style.display = "block";
            setTimeout(function() { document.getElementById("treintayocho").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Qpicas') {
            document.getElementById("treintaynueve").style.display = "block";
            setTimeout(function() { document.getElementById("treintaynueve").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Kpicas') {
            document.getElementById("cuarenta").style.display = "block";
            setTimeout(function() { document.getElementById("cuarenta").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Atreboles') {
            document.getElementById("cuarentayuno").style.display = "block";
            setTimeout(function() { document.getElementById("cuarentayuno").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '2treboles') {
            document.getElementById("cuarentaydos").style.display = "block";
            setTimeout(function() { document.getElementById("cuarentaydos").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '3treboles') {
            document.getElementById("cuarentaytres").style.display = "block";
            setTimeout(function() { document.getElementById("cuarentaytres").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '4treboles') {
            document.getElementById("cuarentaycuatro").style.display = "block";
            setTimeout(function() { document.getElementById("cuarentaycuatro").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '5treboles') {
            document.getElementById("cuarentaycinco").style.display = "block";
            setTimeout(function() { document.getElementById("cuarentaycinco").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '6treboles') {
            document.getElementById("cuarentayseis").style.display = "block";
            setTimeout(function() { document.getElementById("cuarentayseis").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '7treboles') {
            document.getElementById("cuarentaysiete").style.display = "block";
            setTimeout(function() { document.getElementById("cuarentaysiete").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '8treboles') {
            document.getElementById("cuarentayocho").style.display = "block";
            setTimeout(function() { document.getElementById("cuarentayocho").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '9treboles') {
            document.getElementById("cuarentaynueve").style.display = "block";
            setTimeout(function() { document.getElementById("cuarentaynueve").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '10treboles') {
            document.getElementById("cincuenta").style.display = "block";
            setTimeout(function() { document.getElementById("cincuenta").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Jtreboles') {
            document.getElementById("cincuentayuno").style.display = "block";
            setTimeout(function() { document.getElementById("cincunetayuno").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == 'Qtreboles') {
            document.getElementById("cincuentaydos").style.display = "block";
            setTimeout(function() { document.getElementById("cincuentaydos").style.display = "none" }, 2000); // 3000ms = 3s
        } else if ((getPidiendo.rotulo + getPidiendo.palo.figura) == '2corazones') {
            document.getElementById("cincuentaytres").style.display = "block";
            setTimeout(function() { document.getElementById("cincuentaytres").style.display = "none" }, 2000); // 3000ms = 3s
        }
        //var ak=document.getElementById('uno')
        //ak.setAttribute = ("src",getPidiendo.id);
        this.nuevoMazo.push(getPidiendo)
            // console.log(this.nuevoMazo)
        console.log(getPidiendo.valor)


    }

}

var suma1 = 0

class Juego {
    validar(getValidando) {
        if (suma1 < 21) {
            getValidando.forEach(function(numero1) {
                //console.log(numero1)
                if (suma1 < 21) {
                    suma1 += parseInt(numero1.valor);
                    document.getElementById("texto1").style.display = "block";
                    console.log('Aun no consigues tu 21 contiua jugando .....')
                }
            })
        } else if (suma1 == 21) {
            getValidando.forEach(function(numero1) {
                suma1 += parseInt(numero1.valor);
                document.getElementById("texto1").style.display = "none";
                document.getElementById("texto2").style.display = "block";
                console.log('Conseguiste tu 21 eres un GANADOR :)');
            });
        } else {
            document.getElementById("texto1").style.display = "none";
            document.getElementById("texto1").style.display = "none";
            document.getElementById("texto3").style.display = "block";
            console.log('Lamentable te excediste y perdiste :(')
        }
    }

}
var x = new FabricaCartas();
var y = new Jugador();

function bienvenida() {
    y.nombre = document.getElementById('nombre').value;
     alert('Bienveido ' + y.nombre + ' listo para JUGAR!!!!!!')
}
var z = new Juego();

function validarCartas() {
    y.pedir(x.mazo.shift());
    z.validar(y.nuevoMazo);
    //  console.log(suma1);
    

}
//y.pedir(x.mazo.pop())