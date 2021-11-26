const display = document.getElementById('displayDataContainter')
fetchToDoList=()=>{
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
           
            var output = ''
            for(i = 0;i<20;i++){
              output += `<input type="checkbox" id="${i}" name="${response[i].title}">
              <label for="${i}">${response[i].title}</label><br>`
            }
            display.innerHTML = output
           
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}


