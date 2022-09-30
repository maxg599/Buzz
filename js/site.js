function getValues(){

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue= parsInt(fizzValue);
    buzzValue= parsInt(buzzValue);

    if (Number.isInteger(fizzValue)  && number.isInteger(buzzValue)) {
        let fbArray = FizzBuzz (fizzValue, buzzValue)
        
    }else{
        alert("You Must Enter a Integer")
    }

    function FizzBuzz(fizzValue, buzzValue){
        let returnarry = [];

        for (let i = 1; i <= 100; index++) {
           
            if(i % fizzValue == 0 && i % buzzValue){ returnarry.push('FizzBuzz');

            }else if(i % fizzValue ==0){
                returnarry.push('Fizz')
            }

            else if (i % buzzValue ==0){
                returnarry.push('Buzz')
            }

            else{

                   returnarry.push(i);
                }
            
        }




        return returnarry;
    }


    function displayData(fbArray){

        let tableBody = document.getElementById("results");

        let templateRow = document.getElementById("fbTemplate");

        tableBody.innerHTML = "";

        for (let index = 0; index < fbArray.length; index +=5) {
            
        let tableRow = document.importNode(templateRow.content, true);
        let rowCols = tableRow.querySelectorAll("td");
            rowCols[0].textContent = fbArray [index];
            rowCols[1].textContent = fbArray [index+1];
            rowCols[2].textContent = fbArray [index+2];
            rowCols[3].textContent = fbArray [index+3];
            rowCols[4].textContent = fbArray [index+4];

            tableBody.appendChild(tableRow);
        }
    }
}