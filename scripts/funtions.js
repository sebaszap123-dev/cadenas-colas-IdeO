function ocultarMul(){
    var btnMul = document.querySelector(".btnMul");
    var btn1a1 = document.querySelector(".btn1a1");
    var formMul = document.querySelector(".formMul");
    var form1a1 = document.querySelector(".form1a1");
    var res = document.querySelector(".res");

    btnMul.classList.remove('disabled');
    btn1a1.classList.add('disabled');
    formMul.style.display = "none";
    form1a1.style.display = "block";
    res.style.display = "none";
    
    let details=document.getElementById('details');
    details.innerHTML = " ";
}
function ocultar1a1() {
    var btnMul = document.querySelector(".btnMul");
    var btn1a1 = document.querySelector(".btn1a1");
    var formMul = document.querySelector(".formMul");
    var form1a1 = document.querySelector(".form1a1");
    var res = document.querySelector(".res");

    btn1a1.classList.remove('disabled');
    btnMul.classList.add('disabled');
    formMul.style.display = "block";
    form1a1.style.display = "none";
    res.style.display = "none";
    
    let details=document.getElementById('details');
    details.innerHTML = " ";
    let details2=document.getElementById('details2');
    details2.innerHTML = " ";
}