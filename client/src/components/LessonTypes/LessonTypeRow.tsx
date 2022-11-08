import LessonTypesService from '../../Services/LessonTypesService'

const LessonTypeRow = (lessonType) => {
  
  const saveFile = async (event) => {
    const formData = new FormData()
    const files = [...event.target.files]
    formData.append('file', files[0])
    console.log(formData)
    const resp = await LessonTypesService.saveFile(formData, lessonType.lessonType.id)
    console.log(resp)
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
              className="w-[200px] h-[100px]"
              src={lessonType.lessonType.image}
              alt="lessonTypeImage"
            />
            :
            <input
              type="file"
              name="uploadFile"
              onChange={(event) => saveFile(event)}
            >
              
            </input>
        }
      </th>
    </tr>
  )
}

export default LessonTypeRow