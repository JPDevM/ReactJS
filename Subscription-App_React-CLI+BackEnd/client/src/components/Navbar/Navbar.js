import './Navbar.css';

const Navbar = props => {
    const { activeSection } = props;

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand text-white-50" href="setting.html">
          {' '}
          {/* Implementar router */}
          {activeSection === '/' ? <i class="fa fa-cog"></i> : null}
          {activeSection === 'settings' ? (
            <i class="fa fa-plus"></i>
          ) : null}
        </a>
        <span className="navbar-text text-white">
          {activeSection === 'settings'
            ? 'Configuraciones'
            : 'My subscriptions'}
        </span>
        <a className="navbar-brand text-white-50" href="add_existing.html">
          {' '}
          {/* Implementar router */}
          <i class="fa fa-plus"></i>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
