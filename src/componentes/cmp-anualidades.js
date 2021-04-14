
// Creando template
let frmAnualidad = /* template */ 
`   
    <div id="result_options_cmp01" ></div>
    <form class="form-control">
        <input id="renta" type="text" placeholder="Renta" class="form-control inp">
        <input id="tasa" type="text" placeholder="Tasa Interés Anual" class="form-control inp">
        <input id="tiempo" type="text" placeholder="Plazo En Años" class="form-control inp">
        <input id="cap" type="hidden" placeholder="Capitalización" class="form-control inp">
        <a class="btn btn-dark btn-block form-control inp" id="calcular">CALCULAR</a>
    </form>
`;

// Renderizado de contenido
function cmpAnualidades(){
    return resultsContainer.innerHTML = frmAnualidad;
}


// Funcionalidades para el componente
// FUNCIÓN PARA SELECCIONAR TIPO DE TASA
const tipoTasa = () => {

    let option = parseInt(document.getElementById('option').value);

    if(option==2){
        document.getElementById('formulario').innerHTML=frmAnualidad;
        document.getElementById('cap').setAttribute('type', 'text');
        const calcular = document.getElementById('calcular');
        calcular.addEventListener('click', calNominal);
    }else if(option==1){
        document.getElementById('formulario').innerHTML=frmAnualidad;
        document.getElementById('cap').setAttribute('type', 'hidden');
        const calcular = document.getElementById('calcular');
        calcular.addEventListener('click', calEfectiva);
    }else{
        document.getElementById('formulario').innerHTML='NO SELECCIONÓ TASA';
        error();
    }
}


const calEfectiva = ()=>{

    // RECIBIENDO DATOS
    let renta = parseFloat(document.getElementById('renta').value);
    let tasa = parseInt(document.getElementById('tasa').value);
    let tiempo = parseFloat(document.getElementById('tiempo').value);

    // OPERANDO 
    tasa = tasa/100;
    let elemento1 = Math.pow( (1+tasa) , tiempo );
    let monto = renta*((elemento1 -1 )/ tasa );
    let capInv = renta*tiempo;
    let interes = monto-capInv;
    
    // REDUCIENDO DATOS 
    let capInv2 = capInv.toFixed(2);
    let monto2 = monto.toFixed(2);
    let interes2 = interes.toFixed(2);

    imprEfectiva(renta, tasa, tiempo, capInv2, monto2, interes2);
    
    
}



const calNominal = ()=>{

    // RECIBIENDO DATOS
    let renta = parseFloat(document.getElementById('renta').value);
    let tasa = parseInt(document.getElementById('tasa').value);
    let tiempo = parseFloat(document.getElementById('tiempo').value);
    let cap = parseInt(document.getElementById('cap').value);

    // OPERANDO 
    tasa = tasa/100;
    let nm = tiempo*cap;
    let jm = tasa/cap;

    let elemento1 = Math.pow( (1+jm) , nm );
    let monto = renta*((elemento1 -1 )/ jm );
    let capInv = renta*tiempo;
    let interes = monto-capInv;

    // REDUCIENDO DATOS 
    let capInv2 = capInv.toFixed(2);
    let monto2 = monto.toFixed(2);
    let interes2 = interes.toFixed(2);
    
    imprEfectiva(renta, tasa, tiempo, capInv2, monto2, interes2, cap);
}

const imprNominal = (renta, tasa, tiempo, capInv2, monto2, interes2, cap)=>{
    let divAnswer = document.getElementById('answer');
    divAnswer.innerHTML = /* template */
        `<p>
            <h6>RESPUESTA</h6><hr>
            <strong>Renta: $</strong> ` + renta + ` <br>
            <strong>Tasa Interés Nominal: </strong> ` + tasa*100 + `% Anual <br>
            <strong>Capitalizable (m): </strong> ` + cap + ` <br>
            <strong>Plazo: </strong> ` + tiempo + ` años <br><br>

            <strong>Capital de Inversión: $</strong> ` + capInv2 + ` <br>
            <strong>Monto: $</strong> ` + monto2 + ` <br>
            <strong>Interés: $</strong> ` + interes2 + ` <br>
        </p>`;
}
    

const imprEfectiva = (renta, tasa, tiempo, capInv2, monto2, interes2)=>{
        let divAnswer = document.getElementById('answer');
        divAnswer.innerHTML = /* template */
        `<p>
            <h6>RESPUESTA</h6><hr>
            <strong>Renta: $</strong> ` + renta + ` <br>
            <strong>Tasa Interés Efectiva: </strong> ` + tasa*100 + `% Anual <br>
            <strong>Plazo: </strong> ` + tiempo + ` años <br><br>
    
            <strong>Capital de Inversión: $</strong> ` + capInv2 + ` <br>
            <strong>Monto: $</strong> ` + monto2 + ` <br>
            <strong>Interés: $</strong> ` + interes2 + ` <br>
        </p>`;
    }
