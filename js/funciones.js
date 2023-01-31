//elementos del cv: muestra y oculta - activa icono

document.getElementById('objetivos').addEventListener('mouseenter', function () {
    showCV('objetivosInfo', ['formacionInfo', 'experienciaInfo', 'exposicionesInfo', 'equipoInfo', 'herramientasInfo']);
    activarIcono('objetivos', ['formacion', 'experiencia', 'exposiciones', 'equipo', 'herramientas']);
});

document.getElementById('formacion').addEventListener('mouseenter', function () {
    showCV('formacionInfo', ['objetivosInfo', 'experienciaInfo', 'exposicionesInfo', 'equipoInfo', 'herramientasInfo']);
    activarIcono('formacion', ['objetivos', 'experiencia', 'exposiciones', 'equipo', 'herramientas']);
});

document.getElementById('experiencia').addEventListener('mouseenter', function () {
    showCV('experienciaInfo', ['objetivosInfo', 'formacionInfo', 'exposicionesInfo', 'equipoInfo', 'herramientasInfo']);
    activarIcono('experiencia', ['objetivos', 'formacion', 'exposiciones', 'equipo', 'herramientas']);
});

document.getElementById('exposiciones').addEventListener('mouseenter', function () {
    showCV('exposicionesInfo', ['objetivosInfo', 'formacionInfo', 'experienciaInfo', 'equipoInfo', 'herramientasInfo']);
    activarIcono('exposiciones', ['objetivos', 'experiencia', 'formacion', 'equipo', 'herramientas']);
});


document.getElementById('equipo').addEventListener('mouseenter', function () {
    showCV('equipoInfo', ['objetivosInfo', 'formacionInfo', 'exposicionesInfo', 'experienciaInfo', 'herramientasInfo']);
    activarIcono('equipo', ['objetivos', 'experiencia', 'exposiciones', 'formacion', 'herramientas']);
});


document.getElementById('herramientas').addEventListener('mouseenter', function () {
    showCV('herramientasInfo', ['objetivosInfo', 'formacionInfo', 'exposicionesInfo', 'equipoInfo', 'experienciaInfo']);
    activarIcono('herramientas', ['objetivos', 'experiencia', 'exposiciones', 'equipo', 'formacion']);
});

function showCV(idToShowInfo, idsToHideInfo) {
    let x = 0;
    for (x; x < idsToHideInfo.length; x++) {
        document.getElementById(idsToHideInfo[x]).style.display = 'none';
    }
    document.getElementById(idToShowInfo).style.display = 'block';
};

function activarIcono(iconoOn, iconosOff) {
    let x = 0;
    for (x; x < iconosOff.length; x++) {
        document.getElementById(iconosOff[x]).classList.remove('icono-activo');
    }
    document.getElementById(iconoOn).classList.add('icono-activo');
};
//************************************************************************************** */


// oculta y muestra secciones - agrega clase a la seccion activa
document.getElementById("slidefotos").addEventListener('click', function () {
    show('carouselfotos', 'carouselvideos', 'cv');
    activarSeccion('slidefotos', 'slidevideos', 'curriculum');
    document.getElementById('tituloPrincipal').style.display = 'block';
});

document.getElementById("slidevideos").addEventListener('click', function () {
    show('carouselvideos', 'carouselfotos', 'cv');
    activarSeccion('slidevideos', 'slidefotos', 'curriculum');
    document.getElementById('tituloPrincipal').style.display = 'block';
});

document.getElementById("curriculum").addEventListener('click', function () {
    show('cv', 'carouselfotos', 'carouselvideos');
    activarSeccion('curriculum', 'slidefotos', 'slidevideos');
    document.getElementById('tituloPrincipal').style.display = 'none';
    document.getElementById('cv').scrollIntoView();
});

function show(idToShow, idToHide1, idToHide2) {
    document.getElementById(idToShow).style.display = 'block';
    document.getElementById(idToHide1).style.display = 'none';
    document.getElementById(idToHide2).style.display = 'none';
};

function activarSeccion(seccionSi, seccionNo1, seccionNo2) {
    document.getElementById(seccionSi).classList.add('seccion-activa');
    document.getElementById(seccionNo1).classList.remove('seccion-activa');
    document.getElementById(seccionNo2).classList.remove('seccion-activa');
};

//************************************************************************************** */

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

