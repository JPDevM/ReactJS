import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons'

// CSS Custom Styles
import '../assets/css/Menu.css';

const Menu = props => {
	// const { movieData } = props;
	return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand text-white-50" href="setting.html"> {/* Implementar router */}
          <FontAwesomeIcon icon={faCog} />
        </a>
        <span className="navbar-text text-white">
          My subscriptions
        </span>
        <a className="navbar-brand text-white-50" href="add_existing.html"> {/* Implementar router */}
          <FontAwesomeIcon icon={faPlus} />
          </a>
       </nav>
      </header>
	)
}

export default Menu;