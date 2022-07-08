const animations={
    Apparition:{
        Slide:'slide-left',
        ShadowDrop:"shadow-drop-2-center",
        ZoomOut:"zoomOut"
    }
}
function addEffect(animation){
    const imgs = document.querySelectorAll('img');
    for(let i = 0; i<imgs.length;i++){
        imgs[i].classList += animation + " "
    } 
}