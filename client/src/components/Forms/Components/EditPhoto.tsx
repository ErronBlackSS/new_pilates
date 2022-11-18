const EditPhoto = ({onEditPhoto}) => {
  return (
    <div
      className="flex flex-row justify-start gap-[10px] items-center rounded-[50px] bg-[#F2F2F3] w-full relative"
    >
      <img className="rounded-[50px] w-[52px] h-[52px] border border-bordo" src="https://avatars.mds.yandex.net/i?id=ade4fa6a374e3c17004dfd1bbadb7820-5492246-images-thumbs&n=13" alt="" />
      <p className="cursor-pointer">Изменить фото профиля</p>
      <input onChange={onEditPhoto} className="left-[60px] opacity-0 cursor-pointer absolute" type="file" />
    </div>
  )
}

export default EditPhoto