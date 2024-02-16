const Sidebar = () => (
  <aside className="col col-2">
    <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
      <div className="container flex-column align-items-start">
        <a className="navbar-brand" href="#">
          {/* Adriano inserisci il logo in svg */}
          <img src="/logo.png" alt="Logo" width="131" height="40" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul>
              <li><a className="nav-item nav-link" href="#">Home</a></li>
              <li><a className="nav-item nav-link" href="#">Your Library</a></li>
              {/* Aggiungi eventualmente altri link di navigazione */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </aside>
);

export default Sidebar;
