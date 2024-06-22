import { useState,useEffect } from "react";
//引用我要使用的react方法
import Edit from "../components/Edit";
import List from "../components/List";
//引用元件
import "../style/index.css";
import{ API_GET_DATA }from"../global/constants"
//這裡引用了我設定好的API變數，利用解構的方式取得該變數

// const style = {
//     color:"red",
//     fontSize:"30px"
// }
//<div style:{style}/>可以使用這種方式寫入CSS

async function fetchData(getData){
  const res = await fetch(API_GET_DATA)
  const {data} = await res.json()
  getData(data)
}
//這邊建立了一個async函式(異步函式)去呼叫API的資料，並且利用useState改變數值的函式改變data這個值

async function postData(data){
  await fetch(API_GET_DATA,{
    method:"PUT",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({data})
    //在這裡加上{}是因為db.json這個檔案裡的是用物件把data包起來的
  })
}
//這邊建立了一個async函式(異步函式)去新增資料

const Home = () => {
  const [data, setData] = useState([]);
  //在React的概念上，useState這個hook都會有一個狀態及一個變動這個狀態的函式，經由這個函式變動react才會知道畫面需要更新
  //由於react是單向數據流，所以通常都會在父組件上面設定一個值，再用props的方式傳入子組件使用這個狀態，當子組件需要更動數值時我們就必須要把變動這個數值的函式傳入子組件中，所以會變成當兩個資料需要交互，父組件就承擔起中轉站的概念，另外每個組件上面的useState都是獨立的，不會互相影響

  useEffect(()=>{
    postData(data)
  },[data])
  //這邊的useEffect是去偵測data變動過後執行post的動作
  
  useEffect(()=>{
    fetchData(setData)
  },[])
  //當我使用useEffect時，當組件掛載完畢它會先執行一次
  //第一種用法，當綁定的數值有變動時觸發裡面的函數
  //第二種用法，我今天使用setTimeout綁定在data這個數值上面，但等渲染完成時我想要移除設定的clearTimeout，我就可以在return裡面設定函式寫上這個功能，所以我可以先設定要執行什麼副作用，等到渲染完成以後在刪除這個副作用
  //第三種用法是我可以把地按個參數設成是空陣列，我就可以設定這個一個會執行一次的副作用，比如說當我要fetch API時就可以這樣做
  //第四種用法，如果不加第二個參數的話，當每一次組件渲染它就會啟用副作用

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
  //在jsx的寫法中，都是利用函式去return出HTML的結構，並把一些JS的變數透過{}的方式加入進來
};

export default Home;
