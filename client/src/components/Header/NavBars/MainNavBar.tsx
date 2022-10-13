import AuthLink from '../AuthLink'
import LinkPropsItem from '../LinkPropsItem'
import { NAV_LINKS } from '../Links'

const MainNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
      <div className="px-6 w-full flex flex-wrap items-center justify-between">
        <div className="navbar-collapse collapse grow items-center">
          <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
            {NAV_LINKS.map((link, index) => {
              return (
                <LinkPropsItem 
                  key={index}
                  link={link.link}
                  text={link.text}
                />
              )
            })}
          </ul>
        </div>
        <div className="navbar-collapse collapse grow items-center pr-5">
          <ul className="navbar-nav mr-auto lg:flex lg:flex-row float-right">
            <li className="nav-item">
              <AuthLink />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MainNavBar