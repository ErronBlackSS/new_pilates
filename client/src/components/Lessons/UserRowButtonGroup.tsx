import Button from '../Common/Button'
import { ButtonColors } from '../../Utils/constance'

const UserRowButtonGroup = () => {
  return (
    <>
      <Button
        color={ButtonColors.white}
        className="py-[2px] px-[14px]"
        handler={() => { console.log('edit') }}
      >
        Читать описание
      </Button>      
    </>
  )
}

export default UserRowButtonGroup