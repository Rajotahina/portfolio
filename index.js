// var listItem = '';
// for(let i=0 ; i <rajo.experiences.length ; i++) {
//     listItem += '<li>'
//      +rajo.experiences[i].poste+ 
    
//      '</li>' ;

// }
// document.getElementById('list_experiences').innerHTML = listItem;


// test1.textContent = rajo.nom;
// test2.textContent = rajo.prenom;
// test3.textContent = rajo.adresse;
// test4.textContent = rajo.age;


var rajo  = {
    nom: "ANDRIAMANANANTSOA",
    prenom: "Rajo Tahina",
    adresse: "IA 52 ambohimangakely",
    phone: "0341829686",
    age: 23,
    experiences : [
        {    
            "date"  :"2017-2020" ,
            "poste" : "developpement web" ,
             "dure" : "6 mois" ,
             "entreprise" : "lumniness"
        },
        {
            "date"  :"2020-2022",
            "poste" : "technicien maintenance" ,
             "dure" : "6 mois" ,
             "entreprise" : "jouve"
        },  
    ],
    
}
var listItem = '';
 for(let i=0 ; i <rajo.experiences.length ; i++) {
     listItem += '<li>'
     +rajo.experiences[i].date+ " "+rajo.experiences[i].poste +" "  +rajo.experiences[i].dure +  " chez " +rajo.experiences[i].entreprise + '</li>'  
    
      

 }
  document.getElementById('list_experiences').innerHTML = listItem;

  $(document).on("click",".btn1",function(){
   
    if ($('body').hasClass("bg-dark")) {
        $('body').removeClass("bg-dark");
        $('body').addClass("bg-white");
    } else{
        $('body').removeClass("bg-white");
        $('body').addClass("bg-dark");
    }
    if ($('.btn1').text()==="dark mode") {
        $('.btn1').text("light mode");
    }else if($('.btn1').text()==="light mode"){
        $('.btn1').text("dark mode");
    }
    if ($('body').hasClass("bg-dark")) {
        $('.dark').addClass("text-white");
    } else{
        $('.dark').removeClass("text-white");
    }
});

    



