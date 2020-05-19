
    //ユーザー入力値ゲット
    const add = document.getElementById("btn-add");　//追加ボタンのID取得 → 入力値を得るため
    const table = document.getElementById("insert")　//table のID取得　→ 
    
    add.addEventListener("click", () => {
        let contents = document.getElementById("input").value; //追加ボタンを押す度に入力値を取得
        let rowLen = table.rows.length // IDの番号のため、table の列の長さを取得
        let newRow = table.insertRow(-1); //末に行を追加する　0だと最初の行に追加
        let cell1 = newRow.insertCell(0);　//追加した行にセル追加 0で一番初めのセル
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let id = document.createTextNode(rowLen - 1); //document.createTextNode   
        let comment = document.createTextNode(contents); //セルに入れるため、入力データを文字に
        const workingBtn = '<input type="button" value="作業中" />'; //htmlを文字で
        const deleteBtn = '<input type="button" value="削除" />';
        cell1.appendChild(id); //cell1にデータを入れる。
        cell2.appendChild(comment);
        cell3.innerHTML = workingBtn;
        cell4.innerHTML = deleteBtn;
    });
