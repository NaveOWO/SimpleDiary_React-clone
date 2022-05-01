import logo from "./logo.svg";
import "./App.css";
import DiaryEditor from "./diaryEditor";
import DiaryList from "./diaryList";
import { useRef, useState } from "react";
import Lifecycle from "./Lifecycle";

// const dummyList = [
//   {
//     id: 1,
//     author: "me",
//     contents: "hi",
//     emotion: 2,
//     createdDate: new Date(),
//   },
//   {
//     id: 2,
//     author: "me you",
//     contents: "hi",
//     emotion: 3,
//     createdDate: new Date(),
//   },
//   {
//     id: 3,
//     author: "you",
//     contents: "hi",
//     emotion: 1,
//     createdDate: new Date(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);
  const onCreate = (author, contents, emotion) => {
    const createdDate = new Date().getTime();
    const newItem = {
      author,
      contents,
      emotion,
      createdDate,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetID) => {
    const newDiaryList = data.filter((item) => item.id !== targetID);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContents) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, contents: newContents } : it
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
