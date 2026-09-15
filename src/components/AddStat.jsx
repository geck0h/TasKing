const AddStat = ({onAddStat}) => (
  <div id='add-stat'>
    <h2>Add new stat</h2>
    <form onSubmit={onAddStat}>
      <input 
        type='text'
        id='stat-input'
        name='statName'
      />
    </form>
  </div>
)


export default AddStat;