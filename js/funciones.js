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