var ul = document.querySelector("ul");

function getTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function(response) {
    return response.json();
    })
    .then((response) => {
        console.log(response);
        response.forEach(element => {
            var tag = document.createElement("li");
            var text = document.createTextNode (element.title);
            if (element.completed != false) {
                tag.style.color = "blue";
            }
            if (element.completed != false) {
                tag.style.fontFamily = "aktiv-grotesk-thin, san-serif";
                tag.style.fontSize = "3vw";
            }
            var el = document.getElementById("todos");
            tag.appendChild(text);
            el.appendChild(tag);
        })
    })
}

getTodos();