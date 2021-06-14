/**
 * Creare un oggetto che descriva uno studente, con le seguenti proprietà:
 * nome 
 * cognome
 * età
 * Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
 * Creare un array di oggetti di studenti.
 * Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
 * Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
 */

var studente = {
    nome: 'Filippo',
    cognome: 'Mazzamuto',
    eta: 25
};

console.log(studente);
//Stampiamo a schermo le proprietà dell'oggetto studente con ciclo for in
for(var key in studente){
    console.log(studente[key]);
}



//Creare un array di ogetti studente
var studenti = [
    {
        nome: 'Giulia',
        cognome: 'Tosca',
        eta: 25
    },
    {
        nome: 'Pippo',
        cognome: 'Rossi',
        eta: 22
    }
];

/*
//Stampiamo a schermo l'array di oggetti con ciclo for e ciclo for in annidato (Tutte le proprietà)
for(var i = 0; i < studenti.length; i++){
    for(var k in studenti[i]){
        console.log(studenti[i][k]);
    }
}
*/

newStudents();
getStudent(studenti);



//Funzione che aggiunge gli studenti all'oggetto
function setObjStudent(objStudent, items){
    var i = 0;
    for(var key in objStudent){
        objStudent[key] = items[i];
        i++;
    }
    //Pushiamo l'oggetto nell'array di oggetti
    studenti.push(objStudent);
}


//Diamo la possibilità di aggiungere nuovi studenti
function newStudents(){
    var numStudents = parseInt(prompt('Dimmi il numero di quanti studenti vuoi inserire'));
    var nome, cognome, eta;
    while(numStudents && !isNaN(numStudents)){
        nome = prompt('Inserisci il nome');
        cognome = prompt('Inserisci il cognome');
        eta = parseInt(prompt('Inserisci l\'età'));
        //Invochiamo la funzione che aggiunge gli studenti all'oggetto
        setObjStudent(studente, [nome,cognome,eta]);
        numStudents--;
        // Informiamo quanti studenti mancano da caricare
        if(numStudents){
            alert(`Studenti rimanenti da caricare ${numStudents}`);
        }else{
            alert('Hai caricato tutti i studenti');
        }
    }
}


//cicliamo l'oggetto e mostrimo gli studenti nel dom 
function getStudent(obj){
    var div, ul, li, h3;

    //Stampiamo a schermo l'array di oggetti con ciclo for e ciclo for in annidato (proprietà nome e cognome)
    for(var i = 0; i < obj.length; i++){
        div = document.createElement('div');
        h3 = document.createElement('h3');
        ul = document.createElement('ul');
        li = document.createElement('li');

        document.body.appendChild(div);
        div.appendChild(h3).innerHTML = `Studente n° ${i + 1}`;
        div.appendChild(ul);
        ul.appendChild(li).innerHTML = `${obj[i].nome} ${obj[i].cognome} età ${obj[i].eta}`;
    }
}
