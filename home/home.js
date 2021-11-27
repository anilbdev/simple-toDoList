const display = document.getElementById('displayDataContainter')
// const checkboxes =  document.getElementsByTagName("input")
fetchToDoList = () => {
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var output = ''
            for (i = 0; i < 20; i++) {
                output += `<input class='list' type="checkbox" id="${i}" name="${response[i].title}">
              <label for="${i}">${response[i].title}</label><br>`
            }
            display.innerHTML = output
            test()
            
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}
const test = ()=>{
    console.log('hello1');
    const checkboxes =  document.getElementsByTagName("input")
    console.log(checkboxes);
    for (const item of checkboxes) {
        // console.log(item);
        item.addEventListener('click',e =>{
            var count = document.querySelectorAll('input[type="checkbox"]:checked').length
            console.log(count);
            if(count == 5){
               setTimeout(() => {
                alert('5 item clicked')
               }, 300);
            }
        })
      }
}

// document.querySelectorAll('list').forEach(item => {
//     console.log('hello');
//     item.addEventListener('click', event => {
//      var count = document.querySelectorAll('input[type="checkbox"]:checked').length
//     //  console.log('hello');
//     })
//   })

