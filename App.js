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

    document.getElementById('mostrarResultado').textContent = promedio.toPrecision(2);
}


