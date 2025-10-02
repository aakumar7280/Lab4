// Function to handle input and calculate square value
function enter(){
        
        let userInput = document.getElementById("numberInput").value;
        // Nested function to calculate square of input number
        function multiply(num){
            let sqr = num*num;
            return sqr;
        }
        document.getElementById("placeholder").textContent = "The Square of "+ userInput+" is: " + multiply(userInput);
        }