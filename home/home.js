const display = document.getElementById('displayDataContainter')
fetchToDoList=()=>{
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
           
  
            for(i = 0;i<20;i++){
                console.log(response[i].title);
            }
           
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}


