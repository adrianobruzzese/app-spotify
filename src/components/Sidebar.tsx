import '../App.css';

const Sidebar = () => {
  return (
    <div className="mt-3 container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-3 sidebar" id="col-id">
          <div className="sidebar-start sidebar-end rounded rounded-3 scroll-snap-y">
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

            <div className="navigation hidden">
              <ul>
                <li>
                  <a href="#">
                    <i className="bi bi-plus-square-fill"></i>
                    <span>Crea playlist</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-heart-fill"></i>
                    <span>Brani che ti piacciono</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-bookmark-star-fill"></i>
                    <span>I tuoi episodi</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

