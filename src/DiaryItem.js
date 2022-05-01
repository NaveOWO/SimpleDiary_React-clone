import { useRef, useState } from "react";

const DiaryItem = ({
  onEdit,
  onDelete,
  author,
  contents,
  createdDate,
  emotion,
  id,
}) => {
  const [isEdit, setItEdit] = useState(false);
  const toggleIsEdit = () => setItEdit(!isEdit);
  const [localContents, setLocalContents] = useState("contents");
  const localContentsInput = useRef();

  const handleDelete = () => {
    if (window.confirm(`${id}diray really delete?`)) {
      onDelete(id);
    }
  };

  const handleEdit = () => {
    if (localContents.length < 5) {
      localContentsInput.current.focus();
      return;
    }
    onEdit(id, localContents);
    toggleIsEdit();
  };
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          author : {author} | score : {emotion}
        </span>
        <br />
        <span className="date">
          {new Date(createdDate).toLocaleDateString()}
        </span>
      </div>
      <div className="contents">
        {isEdit ? (
          <>
            <textarea
              ref={localContentsInput}
              value={localContents}
              onChange={(e) => setLocalContents(e.target.value)}
            />
          </>
        ) : (
          <>{contents}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleDelete}>Edit Cancel</button>
          <button onClick={handleEdit}>Edit Success</button>
        </>
      ) : (
        <>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={toggleIsEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
