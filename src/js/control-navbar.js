
cmpGif = /* html */
    `
        <iframe src="https://giphy.com/embed/67ThRZlYBvibtdF9JH" frameBorder="0" class="giphy-embed col-md-3" allowFullScreen></iframe>
    `;

let nvMain = document.getElementById('nvMain');
    nvMain.onclick = function(){
        mensaje('Disegned & Developer by David Hernández');
        answer.innerHTML=" ";
        resultGif.innerHTML=cmpGif;
        
    };


let nvHome = document.getElementById('nvHome');
    