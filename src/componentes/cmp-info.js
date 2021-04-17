// Creando el template
let cmpInformation = /* template */
    `
    <div class="col-md-6">
    <img src="src/img/yo.jpg" id="myPicture">
        <h4 id="myName">DAVID HERNÁNDEZ</h4>
        <br><hr>
        
        <p style="text-align:justify">David Hernández es un estudiante de ingeniería informática que en sus ratos libres crea proyectos personales con la finalidad de mejorar sus conocimientos en programación web y otros conocimientos de la carrera. <br> En este caso de la cátedra de Ingeniería Económica. Que habla de diversos temas financieros.</p>

        <a href="#">Link me!</a>

    </div>
    `;

function cmpInfo(){
    return resultsContainer.innerHTML = cmpInformation;
    
}
