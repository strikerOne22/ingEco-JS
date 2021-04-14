

// Creando template
let navbar = /* template */
    `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="#" id="nvMain">IE!</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#" id="nvHome">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Módulos
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                <li><a id="cmp01" class="dropdown-item" href="#">Cálculo de Anualidades</a></li>
                <li><a class="dropdown-item" href="#">Cálculo de Periodos</a></li>
                </ul>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    `;

function cmpNavbar(){
    return resultsNavbar.innerHTML = navbar;
}

