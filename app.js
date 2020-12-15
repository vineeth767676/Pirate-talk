var btntranslate = document.querySelector('#btn-translate');
var text = document.querySelector('#text-input');
var output = document.querySelector('#output');

var url = "https://api.funtranslations.com/translate/pirate.json"

function getUrl(input){
    return url + "?" + "text=" + input;
}

function errorHandler(error){
    if(error instanceof TypeError){
        alert('requests limit exceeded.Try after sometime.');
    }
    else{
        alert('error');
    }
    
}



function clickHandler(){
    var inputVal = text.value;

    fetch( getUrl(inputVal) )
        .then(response => response.json())
        .then(json => {
            var translatedVal = json.contents.translated;
            output.innerText = translatedVal; 
        })
    .catch(errorHandler)
};



btntranslate.addEventListener('click',clickHandler)