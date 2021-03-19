loaded = () => {
    console.log("loaded body");
};

/*function gostou (){
    alert("Obrigado por curtir o post!");
}*/

gostou = () => {
    //alert("Obrigado por curtir o post!");
    document.getElementById("gostou").innerHTML = "<b>Obrigado por curtir o post!</b>";
};

naoGostou = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    //window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //doesn't open a new page!
};

teste = (element) => {
    element ? element.innerHTML = "This!" : document.getElementById("mouseover").innerHTML = "Easter Egg!";
};

teste2 = (element) => {
    element ? element.innerHTML = "Teste" : document.getElementById("mouseover").innerHTML = "Teste 2";
};

onChange = (element) => {
    console.log(element.value);
};