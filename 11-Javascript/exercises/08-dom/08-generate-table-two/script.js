/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let target = document.getElementById("target");
    let table = document.createElement('table'); // createElement est une méthode de document
    
    let nbCol = 10;
    let nbRow = 10;

    //J'initialise le tableau dans la balise target
    target.appendChild(table);

    for(let i=1; i<=nbRow;i++){ //je boucle pour créer le nb de colonnes que je veux

        let row = document.createElement('tr'); 
        // je déclare ma variable qui créée les <tr> </tr> 
            
        target.querySelector("table").appendChild(row); 
        // génère la colonne

        for(let j=1; j<=nbCol;j++){
            let col = document.createElement('td');

            target.querySelector(`tr:nth-child(${i})`).appendChild(col);
            target.querySelector(`tr:nth-child(${i})>td:nth-child(${j})`).innerHTML = i*j
        }

    }
})();
