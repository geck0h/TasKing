const StatLevels = ({ levels }) => {
  
  return(
    <ul>
      {levels.map((level, idx) => (
        <li key={idx}>LVL {idx}: {level.text}</li>
      ))}
    </ul>
  )
}

export default StatLevels;