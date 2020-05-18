
//作業中のボタンを作って
    //ユーザー入力値ゲット
    const add = document.getElementById("btn-add");　//追加ボタンのID取得
    const table = document.getElementById("insert")
    let rowLen = table.rows.length
    add.addEventListener("click", () => {
        let contents = document.getElementById("input").value; 
        let newRow = table.insertRow(-1); //末に行を追加　0だと最初の行に追加
        let cell1 = newRow.insertCell(0);　//追加した行にセル追加 0で一番初めのセル
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let id = document.createTextNode("0"); //table createTextNodeは
        let comment = document.createTextNode(contents);
        let workingBtn = '<input type="button" value="作業中" />';
        let deleteBtn = '<input type="button" value="削除" />';

        cell1.appendChild(id);
        cell2.appendChild(comment);
        cell3.innerHTML = workingBtn;
        cell4.innerHTML = deleteBtn;

    });
