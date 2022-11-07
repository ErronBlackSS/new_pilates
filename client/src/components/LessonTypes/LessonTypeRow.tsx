const LessonTypeRow = (lessonType) => {
  
  const saveFile = async (event) => {
    const formData = new FormData()
    const files = [...event.target.files]
    formData.append('file', files[0])
    console.log(formData)
    const resp = await fetch('http://localhost:5000/api/upload/?' + lessonType.lessonType.id, {
      method: 'POST',
      body: formData,
    })
    console.log(resp)
    //return resp.data
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