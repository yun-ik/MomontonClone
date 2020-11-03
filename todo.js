const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput= toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    const TODOS_LS = 'toDos';

    let toDos = [];

    function deleteToDO(event){
        const btn = event.target,
        li = btn.parentNode;
        toDoList.removeChild(li);
        const cleanToDos = toDos.filter(function(toDo){
            return toDo.id != parseInt(li.id);
        });
        toDos = cleanToDos
        saveToDOs();
    }

    function saveToDOs(){
        localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    }

    function paintToDo(text){
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const span = document.createElement("span");
        const newId = toDos.length +1;
        
        delBtn.innerText="❌";
        delBtn.addEventListener("click", deleteToDO);
        span.innerText = text
        li.appendChild(span);
        li.appendChild(delBtn);
        li.id = newId
        toDoList.appendChild(li);
        const toDoObj = {
            text: text,
            id: newId
        }
        toDos.push(toDoObj);
        saveToDOs();
    }
    function handleSubmit(event){
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = "";
    }

    function loadToDos(){

            const loadedToDos = localStorage.getItem(TODOS_LS);
            if (loadedToDos !== null) {
              const parsedToDos = JSON.parse(loadedToDos);
              parsedToDos.forEach(function(toDo) {
                paintToDo(toDo.text);
              });
        }
    }

    function init(){
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit);
    }

    init();