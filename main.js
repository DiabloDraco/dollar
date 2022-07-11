var elSelect = document.querySelector('#main__select');
var elOutput = document.querySelector('#output');
var elForm = document.querySelector('#form')
var Result

elForm.addEventListener('submit' , function (evt) {
    evt.preventDefault();
    
    var elInput = document.querySelector('#input').value.trim();
    
    // if (elSelect.value = "usd"){
    //     Result =  (elInput * 10912.30)
    // }
    // else if(elSelect.value = "eur"){
    //     Result =  (elInput * 11138.18)
    // }
    // else if(elSelect.value = "rub"){
    //     Result =  (elInput * 172.46)
    // }
    
    switch(elSelect.value) {
        case 'usd':  
        Result =  (elInput * 10912.30)
        break;
        
        case 'eur':
        Result =  (elInput * 11138.18)
        break
        
        case 'rub':
        Result =  (elInput * 172.46)
        break
    }
    
    elOutput.value = Result 
    
})

