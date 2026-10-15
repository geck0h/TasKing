import { Link } from 'react-router-dom';

const SideBar = () => (
  <div className={styles.wrapper}>
    <div className={styles.main}>
      <Link to='/home' className={styles.links}> 
        HOME
      </Link>
      <Link to='/home' className={styles.links}> 
        HOME
      </Link>
      <Link to='/home' className={styles.links}> 
        HOME
      </Link>
      <Link to='/home' className={styles.links}> 
        HOME
      </Link>
    </div>
  </div>
)


const styles = {
  wrapper:
    `fixed top-1/2 -right-10
    h-1/2 w-20
    z-1000
    -translate-y-1/2
    group`,
  main: 
    `fixed top-1/2 -right-30
    flex flex-col items-center justify-start gap-5
    pb-4 
    h-full w-50 
    border-blue-200 border-10 rounded-4xl
    bg-blue-200
    -translate-y-1/2
    overflow-y-auto
    scrollbar-none
    group-hover:right-15
    transition-[right] ease-[cubic-bezier(0.13,0.36,0.17,1.49)] duration-150 `,
  links: 
    `flex justify-center items-center
    w-30 h-30 shrink-0
    rounded-4xl
    shadow-solid shadow-blue-600 
    text-3xl font-bold font-sans
    bg-blue-500
    hover:shadow-solid-pressed hover:translate-y-2
    transition-[translate,box-shadow] duration-100 ease`
}

export default SideBar;