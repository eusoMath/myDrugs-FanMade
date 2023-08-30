function showDrug(){
    if(document.getElementById("drug-information").style.opacity= "0"){
        document.getElementById("drug-information").style.opacity= "100"}
    if(document.getElementById("drug-text").style.opacity= "0"){
        document.getElementById("drug-text").style.opacity= "100"
    }  
}
function hideDrug(){
    if(document.getElementById("drug-information").style.opacity= "100"){
        document.getElementById("drug-information").style.opacity= "0"}
    if(document.getElementById("drug-text").style.opacity= "100"){
        document.getElementById("drug-text").style.opacity= "0"
    }
}

function imgSlider(e, a){
    document.querySelector("#drugs").src = e;
    document.querySelector("#powder").src = a;
}

function nameChanger(a, b, c, d){
    document.getElementById('Name').textContent = a;
    document.getElementById('Price').textContent = b;
    document.getElementById('About').textContent = c;
    document.getElementById('Surname').textContent = d
}

function Login(){
    alert("Sorry, you cannot login into Mydrugs, but now i know your email and password. ty :)")
}