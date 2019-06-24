var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
   'Fazer Café',
   'Beber Gasolina',
   'Jogar lixo no lixo'];

   function renderTodos() {
        for (todo of todos) {
            var todoElement = document.createAttribute('li');
            var todoText = document.createTextNode(todo);
        }
    }

    renderTodos()