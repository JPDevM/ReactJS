import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons'

const Menu = props => {
  // const { movieData } = props;
  const { activeSection } = props;
  console.log(`Estamos en el componente Menu.js y la sección: ${activeSection}`);
	return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand text-white-50" href="setting.html"> {/* Implementar router */}
          { activeSection === '/' ? <FontAwesomeIcon icon={faCog} /> : null}
          { activeSection === 'settings' ? <FontAwesomeIcon icon={faPlus} /> : null}
        </a>
        <span className="navbar-text text-white">
          {activeSection === 'settings' ? 'Configuraciones' : 'My subscriptions' }
        </span>
        <a className="navbar-brand text-white-50" href="add_existing.html"> {/* Implementar router */}
          <FontAwesomeIcon icon={faPlus} />
          </a>
       </nav>
      </header>
	)
}

export default Menu;