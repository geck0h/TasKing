const HomePage = () => (
  <div className={styles.page}>
    <div className={styles.glowElement} />
    {Array.from(Array(8)).map((_, idx) => (
      <InfoField key={idx} />
    ))}
  </div>
) 
// contemplate about how the home page should look
// probably 8 sections
// profile picture, graph, best score, overall percentage, streak, next task, and 2 more sections

const InfoField = () => {
  return(
    <div className='h-80 w-80 bg-white'>

    </div>
  )
}
// InfoField component will probably go in a new file

const styles = {
  page:
  `flex justify-center items-center content-center flex-wrap gap-0.5
  p-40
  h-screen w-full`,
  glowElement:
  `fixed top-1/2 left-1/2 
  w-3/4 h-3/4
  bg-radial from-blue-300 from-10% to-white to-60%
  -translate-1/2
  -z-10`
}

export default HomePage;