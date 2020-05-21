
let todos = [];
const add = document.getElementById("btn-add");　//追加ボタンのID取得 → 入力値を得るため
const table = document.getElementById("insert")　//table のID取得

const displayTodos = () => {
    let input = document.getElementById("input").value; //入力値を取得
    let rowLen = table.rows.length // IDの番号のため、table の列の長さを取得
    const newRow = table.insertRow(-1); //末に行を追加する　0だと最初の行に追加
    const cellForId = newRow.insertCell(0);　//追加した行にセル追加 0で一番初めのセル
    const cellForComment = newRow.insertCell(1);
    const cellForWorking = newRow.insertCell(2);
    const cellForDelete = newRow.insertCell(3);

    const todo = { //オブジェクト作成、格納
        task: input,
        status: "作業中"
    }
    todos.push(todo);
    for (let i in todos) {
        let comment = document.createTextNode(todos[i].task);
        cellForComment.appendChild(comment);
    }

    //cellForidにデータを入れる。DOM操作：appendChild
    let id = document.createTextNode(rowLen - 1);
    cellForId.appendChild(id);

    //document.createElement(tagName[, options]);
    //ボタンにクリックイベントを追加する時など、扱いやすくなる。
    const workingBtn = document.createElement("input");
    workingBtn.type = "button"; // workingBtn.type = string →　input type設定
    workingBtn.value = "作業中";  //input value設定

    const deleteBtn = document.createElement("input");
    deleteBtn.type = "button";
    deleteBtn.value = "削除";
  
    cellForWorking.appendChild(workingBtn);
    cellForDelete.appendChild(deleteBtn);
}

add.addEventListener("click", () => {  
        displayTodos();
    });
