import { NAV_LINKS } from './Links'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="navbar-collapse collapse grow items-center">
          <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
            {NAV_LINKS.map((link, index) => {
              return (
                <li
                  className="nav-item"
                  key={index}
                >
                  <a 
                    className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href={link.link} data-mdb-ripple="true" data-mdb-ripple-color="light"
                  >
                    {link.text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="navbar-collapse collapse grow items-center pr-5">
          <ul className="navbar-nav mr-auto lg:flex lg:flex-row float-right">
            <li className="nav-item">
              <a className="nav-link block lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                href="/login" data-mdb-ripple="true" data-mdb-ripple-color="light">Вход</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header