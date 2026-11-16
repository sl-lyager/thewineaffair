// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");


 //     Forms.  
const lokation=document.querySelector("#lokation")
const dato=document.querySelector("#dato")

const datoer={
  kbh:[
    "20. marts 2027 - kl. 17:30",
    "27. marts 2027 - kl. 18:00",
    "10. april 2027 - kl. 19:00"
  ],

  odense:[
    "21. marts 2027 - kl. 17:30",
    "28. marts 2027 - kl. 18:00",
    "11. april 2027 - kl. 19:00"
  ],

  aalborg:[
    "22. marts 2027 - kl. 18:00",
    "29. marts 2027 - kl. 18:00",
    "12. april 2027 - kl. 19:00"
  ]
};

if(lokation && dato){

lokation.addEventListener("change", function(){
  dato.innerHTML='<option value="">Vælg dato</option>';

  const valgteDatoer = datoer[lokation.value];

  if(valgteDatoer){
    valgteDatoer.forEach(function (datoTekst){
      const option=document.createElement("option");

      option.textContent=datoTekst;
      option.value=datoTekst;

      dato.appendChild(option);
    });
  }
});

}

// fejlbeskeder
const form=document.querySelector(".form-placeholder");

const navn =document.querySelector("#navn");
const email =document.querySelector("#email");
const tlf =document.querySelector("#tlf");

//find fejlbeskederne
const fejlbeskeder=document.querySelectorAll(".class-message");

//funktion til at vise fejl
function visFejl(input,besked){
  besked.classList.add("show");
}

//Funktion til at skjule fejl
function skjulFejl(besked){
  besked.classList.remove("show");
}

//formularen når brugeren trykker tilmeld
form.addEventListener("submit",function(event){
  let fejl=false;

  //tjek navn
  if(navn.value.trim()===""){
    visFejl(navn,fejlbeskeder[0]);
    fejl=true;
  }else{
    skjulFejl(fejlbeskeder[0]);
  }

  //tjek email
 if(email.value.trim()===""){
    visFejl(email,fejlbeskeder[1]);
    fejl=true;
  }else if(!email.validity.valid){
    visFejl(email,fejlbeskeder[1]);
    fejl=true;
  }else {
    skjulFejl(fejlbeskeder[1]);
  }
  
  //tjek tlf
   if(tlf.value.trim()===""){
    visFejl(tlf,fejlbeskeder[2]);
    fejl=true;
  }else{
    skjulFejl(fejlbeskeder[2]);
  }
  
  //stop afsendelse hvis fejl
  if(fejl){
    event.preventDefault();
  }

});


// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  // Henter formularens oplysninger fra URL'en
  const params = new URLSearchParams(window.location.search);

  // Henter værdier fra formularen 
  const navn=params.get("navn");
  const svar=params.get("svar");
  const lokation=params.get("lokation");
  const dato=params.get("dato");
  const vin=params.get("vin");
  const niveau=params.get("niveau");
  const forventninger=params.getAll("forventning");

  //   Finder HTML-elementerne 
  const navnOutput=document.querySelector(".navn");
  const alderOutput=document.querySelector(".alder");
  const lokationOutput=document.querySelector(".lokation-output");
  const datoOutput=document.querySelector(".dato-output");
  const vinOutput=document.querySelector(".vin-output");
  const niveauOutput=document.querySelector(".niveau-output");
  const forventningerOutput=document.querySelector(".forventninger-output");
  const profilOutput=document.querySelector(".profil-output");

  // Viser oplysningerne 
navnOutput.textContent=navn;
alderOutput.textContent=svar ==="ja"?"18+":"Under 18";
datoOutput.textContent=dato;
vinOutput.textContent=vin;

//    Finder Lokations navn. 
if(lokation==="kbh"){
  lokationOutput.textContent="København - Vinkælderen København";
} else if (lokation==="odense"){
  lokationOutput.textContent="Odense - Den Gamle Vinbar";
}else if (lokation==="aalborg"){
  lokationOutput.textContent="Aalborg - Nordlys Vin & Smag";
}

//   FINDER BRUGERENS VINNIVEAU.  
if(niveau === "1"){
  niveauOutput.textContent="Nybegynder";
}else if (niveau === "2"){
  niveauOutput.textContent="Vin Elsker";
}else if (niveau === "3"){
  niveauOutput.textContent="Vin Entusiast";
}else if (niveau === "4"){
  niveauOutput.textContent="Vin Nørd";
}

//     VISER BRUGERENS FORVENTNINGER.  
const forventningTekster={
  "god-vin":"God vin",
  "godt-selskab":"Godt selskab",
  "nye-oplevelser":"Nye oplevelser",
  "god-stemning":"Den gode stemning"
};

const valgteForventninger=forventninger.map(function(valg){
  return forventningTekster[valg];
});

forventningerOutput.textContent=valgteForventninger.join(",");

//   PERSONLIG VINPROFIL.  
if(vin==="Rødvin"){
  profilOutput.textContent="Du er til fyldige smagsoplevelser og klassisk vin med karakter!";
}else if(vin==="Hvidvin"){
  profilOutput.textContent="Du foretrækker friske og elegante smagsoplevelser!";
}else if(vin==="Rosévin"){
  profilOutput.textContent="Du er til lette, frugtige og sommerlige vinoplevelser!";
}

//     ÆNDRER FARVE TEMA EFTER VIN VALG.  
if(vin){
  opsamlingPlaceholder.dataset.vin=vin.toLowerCase()
  .replace("ø","o")
  .replace("é","e");
}
}









