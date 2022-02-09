const WALLPAPERS = [
    //'solid-blue.jpg',
    'windows-light.jpg'
];
document.querySelector('body').style.backgroundImage = ('url("./assets/img/wallpapers/' + (WALLPAPERS.sort(() => Math.random() - 0.5)[0]) + '")');