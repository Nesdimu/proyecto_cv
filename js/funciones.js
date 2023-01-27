
//elementos del cv
document.getElementById('formacion').addEventListener('mouseover', function () {
    showCV('formacionInfo', ['experienciaInfo', 'exposicionesInfo', 'equipoInfo', 'herramientasInfo']);
});

document.getElementById('experiencia').addEventListener('mouseover', function () {
    showCV('experienciaInfo', ['formacionInfo', 'exposicionesInfo', 'equipoInfo', 'herramientasInfo']);
});

document.getElementById('exposiciones').addEventListener('mouseover', function () {
    showCV('exposicionesInfo', ['formacionInfo', 'experienciaInfo', 'equipoInfo', 'herramientasInfo']);
});


document.getElementById('equipo').addEventListener('mouseover', function () {
    showCV('equipoInfo', ['formacionInfo', 'exposicionesInfo', 'experienciaInfo', 'herramientasInfo']);
});


document.getElementById('herramientas').addEventListener('mouseover', function () {
    showCV('herramientasInfo', ['formacionInfo', 'exposicionesInfo', 'equipoInfo', 'experienciaInfo']);
});



function showCV(idToShowInfo, idsToHideInfo) {
    document.getElementById(idToShowInfo).style.display = 'block';
    x = 0;
    for (x; x <= 4; x++) {
        document.getElementById((idsToHideInfo)[x]).style.display = 'none';
    }
};

// oculta y muestra secciones - agrega clase a la seccion activa
document.getElementById("slidefotos").addEventListener('click', function () {
    show('carouselfotos', 'carouselvideos', 'cv', 'slidefotos', 'slidevideos', 'curriculum');
});

document.getElementById("slidevideos").addEventListener('click', function () {
    show('carouselvideos', 'carouselfotos', 'cv', 'slidevideos', 'slidefotos', 'curriculum');
});

document.getElementById("curriculum").addEventListener('click', function () {
    show('cv', 'carouselvideos', 'carouselfotos', 'curriculum', 'slidefotos', 'slidevideos');
    console.log("clic en cv");
});

function show(idToShow, idToHide1, idToHide2, seccionSi, seccionNo1, seccionNo2) {
    document.getElementById(idToShow).style.display = 'block';
    document.getElementById(idToHide1).style.display = 'none';
    document.getElementById(idToHide2).style.display = 'none';
    document.getElementById(idToShow).scrollIntoView();
    document.getElementById(seccionSi).classList.add('seccion-activa');
    document.getElementById(seccionNo1).classList.remove('seccion-activa');
    document.getElementById(seccionNo2).classList.remove('seccion-activa');
};

// boton go-top
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        document.querySelector('.go-top-container').classList.add('show');
    } else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
};
document.querySelector('.go-top-container').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
