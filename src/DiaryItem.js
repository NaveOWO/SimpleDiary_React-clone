const DiaryItem = ({ author, contents, createdDate, emotion, id }) => {
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
      <div className="contents">{contents}</div>
    </div>
  );
};

export default DiaryItem;
