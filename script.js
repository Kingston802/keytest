window.addEventListener('keydown', function(e) {
    //console.log(e);

    let toRemove = document.getElementsByClassName(e.which);
    console.log(toRemove.length);
    for (var i=0; i < toRemove.length; i++) {
        console.log(i);
        toRemove[i].classList.add("clicked");
    }
})
