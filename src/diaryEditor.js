import { useRef, useState } from "react";

const DiaryEditor = () => {
  const authorInput = useRef();
  const contentsInput = useRef();

  const [state, setState] = useState({
    author: "",
    contents: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.contents.length < 1) {
      contentsInput.current.focus();
      return;
    }
    alert("Good Night🌙");
  };

  return (
    <div className="DiaryEditor">
      <h2>Today's Dairy</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentsInput}
          name="contents"
          value={state.contents}
          onChange={handleChangeState}
        />
      </div>
      <div>
        Today Emotion Score :
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};
export default DiaryEditor;
