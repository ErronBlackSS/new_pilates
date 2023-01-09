import { ChangeEventHandler, FC } from 'react'

interface IEditPhoto {
  onEditPhoto: ChangeEventHandler<HTMLInputElement>
  userPhoto: string
}

const EditPhoto: FC<IEditPhoto> = ({onEditPhoto, userPhoto}) => {
  return (
    <div
      className="flex flex-row justify-start gap-[10px] items-center rounded-[50px] bg-[#F2F2F3] w-full relative"
    >
      <img className="rounded-[50px] w-[52px] h-[52px] border border-bordo object-cover" src={userPhoto} alt="" />
      <p className="cursor-pointer">Изменить фото профиля</p>
      <input onChange={onEditPhoto} className="left-[60px] opacity-0 cursor-pointer absolute" type="file" />
    </div>
  )
}

export default EditPhoto