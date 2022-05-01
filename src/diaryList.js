import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit, onDelete, diaryList }) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>History📖</h2>
      <h4>There're {diaryList.length} diaris.</h4>
      <div>
        {diaryList.map((item) => (
          <DiaryItem
            key={item.id}
            {...item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
