
const todos = [];
const add = document.getElementById("btn-add");　//追加ボタンのID取得 → 入力値を得るため
const table = document.getElementById("insert");　//table のID取得 html内にテーブル作成
const tBody = document.getElementById("todorow");

add.addEventListener("click", () => { 
    addTodo(); 
});

const addTodo = () => {
    const input = document.getElementById("input").value; //入力値を取得
    document.getElementById("input").value = ""; //テキストボックスを空欄に戻す
    const todo = { //オブジェクト作成、格納
        task: input,
        status: "作業中"
    }
    todos.push(todo);
    displayTodos(todo);
    deleteTodo(todo);
}

const createWorkingBtn = () => {
    //document.createElement(tagName[, options]);
    //ボタンにクリックイベントを追加する時など、扱いやすくなる。
    const workingBtn = document.createElement("input");
    workingBtn.setAttribute("type","button"); // workingBtn.type = string →　input type設定
    workingBtn.setAttribute("value","作業中"); //input value設定
    workingBtn.setAttribute("class","status");
    return workingBtn;
}

const createDeleteBtn = (todo) => {　
    const deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.value = "削除";
    deleteBtn.className = "delete";
    return deleteBtn;
}

const displayTodos = (todo) => {
    console.log(todos.indexOf(todo));
    //一旦全てのTodoをクリア　tr全部削除して、新たに行を作成、入れている。
    //console.log("td", tBody.textContent);
    tBody.textContent = null;
    // while (tBody.firstChild) {
    //     tBody.removeChild(tBody.firstChild);
    // };
    todos.forEach((todo, index) => { //itemは　object, indexは array の index
        const newRow = tBody.insertRow(-1); //末に行を追加する　0だと最初の行に追加。ボタンを押すたびに新らしく行を作って追加
        const cellForId = newRow.insertCell(0);　//追加した行にセル追加 0で一番初めのセル
        const cellForComment = newRow.insertCell(1);
        const cellForWorking = newRow.insertCell(2);
        const cellForDelete = newRow.insertCell(3);
        cellForId.textContent = null;
        cellForComment.textContent = null;
        cellForWorking.textContent = null;
        cellForDelete.textContent = null;
        const comment = document.createTextNode(todo.task); 
        cellForComment.appendChild(comment);
        const id = document.createTextNode(index);  //インデックス値をテキストノードにしないとappendChildしてテキストで表示できない
        cellForId.appendChild(id);
        //ボタン追加
        const wBtn = createWorkingBtn();
        const dBtn = createDeleteBtn();
        cellForWorking.appendChild(wBtn);
        cellForDelete.appendChild(dBtn);     
    });     　 
}
//削除ボタン押した時の動作
const daleteTodoItem = document.getElementsByClassName("delete");
function deleteTodo(){
for (let i = 0; i < daleteTodoItem.length; i++) {
    daleteTodoItem[i].addEventListener("click", deleteListItem, false); 
};
};

function deleteListItem (todo) {
    let tr = this.parentNode.parentNode; //押したボタンのtrを取得
    tr.parentNode.deleteRow(tr.sectionRowIndex); //その行のインデックスを取得して削除
    //deleteItem = tr.rowIndex - 1;
    deleteItem = todos.indexOf(todo);
    console.log(deleteItem);
    //todos.splice(deleteItem, 1); //Todos配列からそのインデックスのオブジェクトを削除
    //console.log(todos);
    //displayTodos(); //削除後のIDを再取得、再表示させるため
};


  



