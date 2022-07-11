var elSelect = document.querySelector('#main__select');
var elOutput = document.querySelector('#output');
var elForm = document.querySelector('#form')
var Result

elForm.addEventListener('submit' , function (evt) {
    evt.preventDefault();
    
    var elInput = document.querySelector('#input').value.trim();
    
    switch(elSelect.value) {
        case 'usdsum':  
        Result =  (elInput * 10880)
        break;
        case 'sumusd':  
        Result =  (elInput / 10950).toFixed(2)
        break
    }
    
    elOutput.value = Result 
    
})

