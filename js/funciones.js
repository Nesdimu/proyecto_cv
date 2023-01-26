
// oculta y muestra secciones
// document.getElementById("slidefotos").addEventListener('click', function () {
//     document.getElementById('carouselfotos').style.display = 'block';
//     document.getElementById('carouselvideos').style.display = 'none';
//     document.getElementById('cv').style.display = 'none';
//     document.getElementById('carouselfotos').scrollIntoView();
// });

// document.getElementById("slidevideos").addEventListener('click', function () {
//     document.getElementById('carouselfotos').style.display = 'none';
//     document.getElementById('carouselvideos').style.display = 'block';
//     document.getElementById('cv').style.display = 'none';
//     document.getElementById('carouselvideos').scrollIntoView();
// });

// document.getElementById("curriculum").addEventListener('click', function () {
//     document.getElementById('carouselfotos').style.display = 'none';
//     document.getElementById('carouselvideos').style.display = 'none';
//     document.getElementById('cv').style.display = 'block';
//     document.getElementById('cv').scrollIntoView();
// });

document.getElementById("slidefotos").addEventListener('click', function () {
    show('carouselfotos', 'carouselvideos', 'cv');
});

document.getElementById("slidevideos").addEventListener('click', function () {
    show('carouselvideos', 'carouselfotos', 'cv');
});

document.getElementById("curriculum").addEventListener('click', function () {
    show('cv', 'carouselvideos','carouselfotos');
});

function show(idToShow, idToHide1, idToHide2) {
    document.getElementById(idToShow).style.display = 'block';
    document.getElementById(idToHide1).style.display = 'none';
    document.getElementById(idToHide2).style.display = 'none';
    document.getElementById(idToShow).scrollIntoView();
}


// boton go-top
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        document.querySelector('.go-top-container').classList.add('show');
    } else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
}
document.querySelector('.go-top-container').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});