function renderNewResponse(cityName){
    var responseContainer = document.createElement("div");
    responseContainer.setAttribute('id', 'response-container');
    var content = document.createTextNode("City: " + cityName);
    //content.setAttribute('id', 'city-name-response');
    responseContainer.appendChild(content);
    var responseArea = document.getElementById("response-area");
    responseArea.appendChild(responseContainer);
}

function reRenderResponse(cityName){
    var responseContainer = document.getElementById('response-container');
    responseContainer.remove();
    renderNewResponse(cityName);
}

function renderResponse(cityName){
    var responseContainer = document.getElementById('response-container');
    if (!responseContainer) {
        renderNewResponse(cityName);
    }
    else {
        reRenderResponse(cityName);
    }
}

function handleForm(){
    var cityName = document.getElementById('city-name').value;
    renderResponse(cityName);
}
