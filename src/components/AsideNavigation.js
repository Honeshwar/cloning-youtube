import styles from '../styles/asideNavigation.module.css'
function AsideNavigation() {
  return (
    <div className={styles.asideNavigation}>
      <div className={styles.asideNavigationItems}>
        <i class="fa fa-home"></i>
        <span>Home</span>
      </div>
      <div className={styles.asideNavigationItems}>
        <i class="fa-solid fa-mobile-screen"></i>
        <span>Shorts</span>
      </div>
      <div className={styles.asideNavigationItems}>
        <i class="fa-regular fa-money-bill-1"></i>
        <span>Subscriptions</span>
      </div>
      <div className={styles.asideNavigationItems}>
        <i class="fa-solid fa-photo-film"></i>
        <span>Library</span>
      </div>
      <div className={styles.asideNavigationItems}>
        <i class="fa fa-history"></i>
        <span>History</span>
      </div>

    </div>
  )
}

export default AsideNavigation