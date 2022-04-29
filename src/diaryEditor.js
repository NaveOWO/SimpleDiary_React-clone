import { useState } from "react";

const DiaryEditor = () => {
  const [author, setAthor] = useState("");

  return (
    <div className="DiaryEditor">
      <h2>Today's Dairy</h2>
      <div>
        <input
          value={author}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default DiaryEditor;
