import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
        <i title="open offCanvas" className="fa fa-bars"></i>
        <a title="Home" >
            <i className="fa fa-youtube-play"></i>
           &nbsp;Youtube <small><sup>IN</sup></small>
        </a>
        </div>
        <form className={styles.navbarMiddle}>
            <input type="search" placeholder="Search" title="search" />
            <button type="submit" title="submit" ><i className="fa fa-search"></i></button>
            <i class="fa fa-microphone"></i>
        </form>
        <div className={styles.navbarEnd}>
            {/* if sign in */}
            {/* <i title="create video" className="fa fa-video-camera"></i>
            <i title="notification" className="fa fa-bell"></i>
            <i title="user" className="fa fa-user"></i> */}
            {/* if not sign in */}
            <i title="settings" className="fa fa-ellipsis-v"></i>
            <span title="sign-in form"><i className="fa fa-user"></i> Sign in</span>
        </div>
    </nav>
  );
   
}

export default Navbar;