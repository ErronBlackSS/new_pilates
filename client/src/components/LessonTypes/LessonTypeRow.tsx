const LessonTypeRow = ({lessonType, onSaveFile, onRemoveFile}) => {

  return (
    <tr
      className="bg-[#AAA] gap-[5px]"
    >
      <th>
        {lessonType.title}
      </th>
      <th className="truncate max-w-[600px]">
        {lessonType.description}
      </th>
      <th>
        {lessonType.duration}
      </th>
      <th>
        {lessonType.type}
      </th>
      <th>
        {
          lessonType.image_url ?
            <div className="flex flex-row">
              <img
                className="w-[200px] h-[100px]"
                src={lessonType.image_url}
                alt="lessonTypeImage"
              />
              <button
                className="bg-[#008080] text-[#FFF] rounded-[12px]"
                onClick={() => onRemoveFile(lessonType.id)}
              >
                X
              </button>
            </div>
            :
            <input
              type="file"
              name="uploadFile"
              onChange={(event) => onSaveFile(event, lessonType.id)}
            >
              
            </input>
        }
      </th>
    </tr>
  )
}

export default LessonTypeRow