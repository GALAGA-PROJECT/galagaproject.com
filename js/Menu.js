window.addEventListener("scroll", function(){
    var header = this.document.querySelector('.nav-fake');
    header.classList.toggle("down",window.scrollY > 150);
})

window.addEventListener("scroll", function(){
    var texto = document.querySelectorAll(".titulo")[0];
    var altura = window.innerHeight/4.1;
    var distancia = texto.getBoundingClientRect().top;

    console.log(altura)
    console.log(distancia)


        texto.classList.add('transform-up')
    if( distancia <= altura){
            texto.classList.add('aparece');
    } else {
        texto.classList.remove('aparece');
    }
})