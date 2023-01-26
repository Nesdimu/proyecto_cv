
// oculta y muestra secciones
document.getElementById("slidefotos").addEventListener('click', function () {
    document.getElementById('carouselfotos').style.display='block';
    document.getElementById('carouselvideos').style.display='none';
    document.getElementById('cv').style.display='none';
});

document.getElementById("slidevideos").addEventListener('click', function () {
    document.getElementById('carouselfotos').style.display='none';
    document.getElementById('carouselvideos').style.display='block';
    document.getElementById('cv').style.display='none';
});

document.getElementById("curriculum").addEventListener('click', function () {
    document.getElementById('carouselfotos').style.display='none';
    document.getElementById('carouselvideos').style.display='none';
    document.getElementById('cv').style.display='block';
});

// boton go-top
window.onscroll = function(){
    if (document.documentElement.scrollTop >80){
        document.querySelector('.go-top-container').classList.add('show'); 
    }else{
        document.querySelector('.go-top-container').classList.remove('show'); 
    }
}
document.querySelector('.go-top-container').addEventListener('click', () =>{
    window.scrollTo({
    top:0,
    behavior:"smooth"
    });
});