
const UserCard = ({ name, lastname, image_url, phone, email }) => {

  const imageLink = image_url? image_url : 'http://localhost:8080/files/user_photos/sss.png'

  return (
    <div className="flex flex-col w-[318px] h-[165px] bg-[#FFFEFE] shadow-md rounded-[10px] gap-[20px] px-[20px] py-[16px]">
      <div className="flex justify-start items-center gap-[10px]">
        <img className="rounded-[50px] w-[52px] h-[52px] border border-bordo object-cover" src={imageLink} alt="" />
        <span>{name + ' ' + lastname}</span>
      </div>
      <div className="">
        <span className="inline-block border-b-[1px] border-bordo mb-[6px]">{phone}</span>
        <br/> 
        <span className="inline-block border-b-[1px] border-bordo">{email}</span>
      </div>
    </div>
  )    
}

export default UserCard