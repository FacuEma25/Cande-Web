window.onscroll = function() {
    if(document.documentElement.scrollTop > 100){
        document.querySelector(".botton-top-container") .classList.add ("show")
    } else{
        document.querySelector(".botton-top-container") .classList.remove ("show")
    }
}

document.querySelector (".botton-top-container").addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
} )