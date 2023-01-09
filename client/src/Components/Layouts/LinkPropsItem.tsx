import { Link } from 'react-router-dom'
interface InputItemProps {
  link: string
  text: string
}

const LinkPropsItem = ({ link, text }: InputItemProps) => {
  return (
    <li
      className="nav-item"
    >
      <Link
        className=" flex justify-center nav-link block pr-2 lg:px-2 py-2 text-[20px] mobile-below:text-bordo mx-[10px]"
        to={link}
      >
        {text}
      </Link>
    </li>
  )
}

export default LinkPropsItem