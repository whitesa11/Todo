
const todos = [];
const add = document.getElementById("btn-add");　//追加ボタンのID取得 → 入力値を得るため
const table = document.getElementById("insert")　//table のID取得 html内にテーブル作成

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
    displayTodos(); 
}

const createWorkingBtn = () => {
    //document.createElement(tagName[, options]);
    //ボタンにクリックイベントを追加する時など、扱いやすくなる。
    const workingBtn = document.createElement("input");
    workingBtn.type = "button"; // workingBtn.type = string →　input type設定
    workingBtn.value = "作業中";  //input value設定
    return workingBtn;
}

const createDeleteBtn = () => {　
    const deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.value = "削除";
    deleteBtn.className = "delete";
    return deleteBtn;
}

const displayTodos = () => {
    const newRow = table.insertRow(-1); //末に行を追加する　0だと最初の行に追加
    const cellForId = newRow.insertCell(0);　//追加した行にセル追加 0で一番初めのセル
    const cellForComment = newRow.insertCell(1);
    const cellForWorking = newRow.insertCell(2);
    const cellForDelete = newRow.insertCell(3);
    todos.forEach(todo => {   
        const comment = document.createTextNode(todo.task); 
        cellForComment.textContent = null; //一旦前回のセルのテキストをクリア
        cellForComment.appendChild(comment);
    });  
    //ボタン追加
    const wBtn = createWorkingBtn();
    const dBtn = createDeleteBtn();
    const id = document.createTextNode(todos.length - 1);
    cellForId.appendChild(id);
    cellForWorking.appendChild(wBtn);
    cellForDelete.appendChild(dBtn);

    deleteTodo(); 
}

const daleteTodoItem = document.getElementsByClassName("delete");
function deleteTodo(){
for (let i = 0; i < daleteTodoItem.length; i++) {
    daleteTodoItem[i].addEventListener('click', deleteListItem, false);
};
};

function deleteListItem () {
    let tr = this.parentNode.parentNode; //押したボタンの行を取得
    console.log(this.parentNode.parentNode);
    tr.parentNode.deleteRow(tr.sectionRowIndex); //その行のインデックスを取得して削除
};






