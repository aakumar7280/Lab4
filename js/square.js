// Square function that uses nested function approach
function square(num){
            function multiply(num){
                return num*num;
            }
            return multiply(num);
        }
        let myFunction = square(5);
        // Display the calculated square value
        alert(myFunction);