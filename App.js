let arrayNotas = [5.5 , 7 , 4.3 , 2 , 3.9];


function mostrarNotas(){
    let mostrar = document.getElementById('lista');
    for(let notas of arrayNotas ){
        console.log(notas);
       let lista = document.createElement('li');
       lista.innerText = notas;      
        
       mostrar.appendChild(lista);
    }
}


function promedio(){
    let num = arrayNotas;
    let nota = 0;
    for(n=0; n<5; n++){        
        nota += num[n]
    }

    let promedio = (nota / 5);

    document.getElementById('mostrarPromedio').textContent = promedio.toPrecision(2);
}


function NotaMayor(){
    let notaMayor = 0;
    let i=0;
    while(i < 5){
       if(arrayNotas[i] > notaMayor){
            notaMayor = arrayNotas[i];
       }
       i++;
    }
    document.getElementById('mostrarNotaAlta').textContent = notaMayor;
}

function Reprobado(){
    let i = 0;
    let notaMenor;
   do {
        notaMenor = arrayNotas[i];
        i++;
   } while (notaMenor>4);
    document.getElementById('mostrarResultado').textContent = 'Haz reprobado ya que tienes una nota: ' + notaMenor;
}