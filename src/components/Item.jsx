const Item = ({id,note,date,time,deleteData,isSubmit})=>{
    function deleteItemData(){
        isSubmit.current = true
        deleteData((prev)=>{
            return prev.filter(item=>item.id !== id)
            //呼叫index裡的setData這個修改data的函式執行，重新回傳一個根據條件修改新的陣列，進而重新渲染
            //這裡為什麼可以指定到我們所選的按鈕id，是因為我們要把每個item看作是獨立的組件，而不是它是一整塊頁面等著我們用另一個變數抓取選擇的資料id，所以當然在每個獨立組件裡面都會有自己固定的值，進而可以抓到我們點選的item的id
        })
    }
    //既然前面有使用的fetch去抓API那我這裡是不是也要有刪除?
    return <div className="item">
        <div>
            <p>{note}</p>
            <p>{date}</p>
            <p>{time}</p>
        </div>
        <button className="remove" onClick={deleteItemData}>刪除</button>
    </div>
}

export default Item