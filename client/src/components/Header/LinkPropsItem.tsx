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
        className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
        to={link}
      >
        {text}
      </Link>
    </li>
  )
}

export default LinkPropsItem