import '../App.css';

const Sidebar = () => {
  return (
    <div className="col-md-3 col-lg-3 sidebar" id="col-id">
      <div className="sidebar-start sidebar-end rounded rounded-3">
        <div className="logo hidden">
          <a href="#">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
              alt="Logo"
            />
          </a>
        </div>
        <div className="navigation">
          <ul className="fixed-bottom-bar">
            <li>
              <a href="#">
                <i className="bi bi-house"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-search"></i>
                <span>Cerca</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-collection"></i>
                <span>La tua libreria</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Altre sezioni della sidebar se riesco a fixarla */}
      </div>
    </div>
  );
};

export default Sidebar;
