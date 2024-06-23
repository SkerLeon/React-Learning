import Item from "../components/Item";

const List = ({ listData, deleteData,isSubmit }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id } = item;
        return (
          <Item
            note={note}
            date={date}
            time={time}
            key={id}
            id ={id}
            deleteData={deleteData}
            isSubmit={isSubmit}
          />
        );
      })}
    </div>
  );
};
export default List;
