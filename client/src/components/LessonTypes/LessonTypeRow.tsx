import LessonTypesService from '../../Services/LessonTypesService'

const LessonTypeRow = (lessonType) => {
  
  const saveFile = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('files', file)
    console.log(formData)
    const resp = await LessonTypesService.saveFile(formData, lessonType.lessonType.id)
    console.log(resp.data)
    return resp.data
  }

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
        {
          lessonType.lessonType.image ? 
            <img
              src={lessonType.lessonType.image}
              alt="lessonTypeImage"
            />
            :
            <input
              type="file"
              onChange={saveFile}
            >
              
            </input>
        }
      </th>
    </tr>
  )
}

export default LessonTypeRow