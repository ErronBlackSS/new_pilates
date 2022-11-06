const LessonTypeListItem = (lessonType) => {
  
  return (
    <tr
      className="bg-[#AAA] gap-[5px]"
    >
      <th>
        {lessonType.lessonType.title}
      </th>
      <th className="truncate max-w-[600px]">
        {lessonType.lessonType.description}
      </th>
      <th>
        {lessonType.lessonType.duration}
      </th>
      <th>
        {lessonType.lessonType.type}
      </th>
      <th>
        {lessonType.lessonType.image}
      </th>
    </tr>
  )
}

export default LessonTypeListItem