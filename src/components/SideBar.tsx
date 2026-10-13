import { Link } from 'react-router-dom';

const SideBar = () => {
  return(
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Link to='/home' className={styles.links}> 
          HOME
        </Link>
      </div>
    </div>
  )
}

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
    border-secondary border-10 rounded-4xl
    h-full w-50 
    bg-secondary
    -translate-y-1/2
    overflow-y-auto
    scrollbar-none
    group-hover:right-15
    transition-[right] duration-150`,
  links: 
    `flex justify-center items-center
    w-30 h-30 shrink-0
    rounded-4xl
    text-3xl font-bold font-sans
    bg-blue-500`
}

export default SideBar;