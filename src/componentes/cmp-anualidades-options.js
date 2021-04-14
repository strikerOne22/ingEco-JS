
// Creando el template
let cmpAnualOptions = /* template */
    `
    <div class="col-md-6">
        <h4>CALCULO EL MONTO DE ANUALIDADES</h4><hr>
        
        <select class="form-control form-select inp" id="option" onchange="tipoTasa()">
            <option value="0">-- Selecciones Tipo de Tasa --</option>
            <option value="1">Tasa Efectiva</option>
            <option value="2">Tasa Nominal</option>
        </select>
        
        <div id="formulario"></div>

    </div>
    `;

function cmpAnuOpt(){
    return resultsContainer.innerHTML = cmpAnualOptions;
}
