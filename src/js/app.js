
// Creando los listeners para los componentes
let cmp01 = document.getElementById('cmp01');
    cmp01.addEventListener('click', function(){
        cerrarGif();
        cmpAnuOpt();
    });

let cmp02 = document.getElementById('cmp02');
cmp02.addEventListener('click', function(){
    cerrarGif();
    cmpPlazo();
});

let cmp03 = document.getElementById('cmp03');
    cmp03.addEventListener('click', function(){
        cerrarGif();
        cmpInfo();
    });

function cerrarGif(){
    resultGif.innerHTML="";
}