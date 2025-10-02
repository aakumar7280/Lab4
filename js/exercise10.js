function enter(){
        
        let userInput = document.getElementById("numberInput").value;
        function multiply(num){
            let sqr = num*num;
            return sqr;
        }
        document.getElementById("placeholder").textContent = "The Square of "+ userInput+" is: " + multiply(userInput);
        }