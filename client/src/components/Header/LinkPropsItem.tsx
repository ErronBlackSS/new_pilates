interface InputItemProps {
  link: string
  text: string
}

const LinkPropsItem = ({ link, text }: InputItemProps) => {
  return (
    <li
      className="nav-item"
    >
      <a
        className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
        href={link} data-mdb-ripple="true" data-mdb-ripple-color="light"
      >
        {text}
      </a>
    </li>
  )
}

export default LinkPropsItem