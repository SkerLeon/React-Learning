import { useState } from "react";

const Edit = ({ add,isSubmit }) => {
  const [id, setid] = useState(0);
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    isSubmit.current = true
    setid(id + 1);
    add((prevData) => {
      return [
        {
          id,
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }
  //原本的想法應該要是在這裏面撰寫一個post的副作用傳送資料到資料庫裡，但其實只需要針對我們在index.jsx裡的data設定useEffect，讓它每次變動的時候就執行post的動作

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
