import logo from "./logo.svg";
import "./App.css";
import DiaryEditor from "./diaryEditor";
import DiaryList from "./diaryList";

const dummyList = [
  {
    id: 1,
    author: "me",
    contents: "hi",
    emotion: 2,
    createdDate: new Date(),
  },
  {
    id: 2,
    author: "me you",
    contents: "hi",
    emotion: 3,
    createdDate: new Date(),
  },
  {
    id: 3,
    author: "you",
    contents: "hi",
    emotion: 1,
    createdDate: new Date(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
