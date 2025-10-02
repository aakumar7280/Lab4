function square(num){
            function multiply(num){
                return num*num;
            }
            return multiply(num);
        }
        let myFunction = square(5);
        alert(myFunction);