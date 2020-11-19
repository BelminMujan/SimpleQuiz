let trenutno=0
let score=0;


function addPitanje(){
    document.querySelector("button").disabled=true;
    let p1=pitanja[trenutno];
    let prikaz=document.querySelector(".pitanja");
    prikaz.innerHTML=`<h2 id="pitanje">${p1.p}</h2>`;
    for (let i = 0; i < p1.o.length; i++) {
        prikaz.innerHTML+=`
        </br><input class="p" onclick="enable()" id="a${i}" type="radio" value="o${i+1}" name="odgovor">
        <label class="odg" id="aText"for="a${i}">${p1.o[i]}</label>
        `
    }
}
addPitanje();


let odgovor=document.getElementsByName('odgovor');

let tacniOdgovori=[];
function provjera(){
    for(let i=0;i<odgovor.length;i++)
    {
        if(odgovor[i].checked)
        {
            if(odgovor[i].value==pitanja[trenutno].to)
            {
                tacniOdgovori.push
                ({
                    rbPitanja: trenutno+1,
                    odgovor: "Tačno",
                    tacanOdgovor: pitanja[trenutno].to
                });
                score++;
            }
            else
            {
                tacniOdgovori.push
                ({
                    rbPitanja: trenutno+1,
                    odgovor: "Netačno",
                    tacanOdgovor: pitanja[trenutno].to
                })
            }   
        }
    }

};



function displayResult()
{
    document.querySelector(".pitanja").style.display="none";
    document.querySelector("#pitanje").style.display="none";
    document.querySelector(".rezultat").innerHTML=`<div class="pitanja" style="margin: 50px;">Tacno ste odgovorili ${score} od ${pitanja.length} odgovora.</div>`;
    for (let i = 0; i < tacniOdgovori.length; i++) {
        if(tacniOdgovori[i].odgovor!="Tačno"){
            document.querySelector(".rezultat").innerHTML+=`
            <div class="odgovoriRezultat">${tacniOdgovori[i].rbPitanja}. ${tacniOdgovori[i].odgovor}, a tačan odgovor je ${tacniOdgovori[i].tacanOdgovor}</div>
            `
        }else{
            document.querySelector(".rezultat").innerHTML+=`
            <div class="odgovoriRezultat">${tacniOdgovori[i].rbPitanja}. ${tacniOdgovori[i].odgovor}</div>
            `
        }

    }
    document.querySelector(".rezultat").style.display="block";
    score=0;
    
};
function enable(){  //enablinng next button
        document.querySelector("button").disabled=false;
}

document.getElementById("dalje").addEventListener('click', function(){
    provjera();
    trenutno++;
    if(trenutno<pitanja.length)
    {

        document.getElementById("dalje").innerText="Dalje";
        addPitanje();
        document.querySelector(".pitanja").style.display="block";
        document.querySelector("#pitanje").style.display="block";
        document.querySelector(".rezultat").style.display="none";
    }
    else 
    {
        displayResult();
        trenutno=0;
        document.getElementById("dalje").innerText="Ponovo";
        addPitanje();
        trenutno--;
        tacniOdgovori=[];
        enable();
    }

})