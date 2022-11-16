const SortOption = ({ label, selection, onClick }) => {
  const id = label.toLowerCase().split(" ").join("-")
  return (
    <div>
      <input type="radio" name="sort-parameter" id={id} value={id} checked={selection === id} onClick={() => onClick(id)} readOnly />
      <label htmlFor={id}>{label}</label>
    </div> 
  )
}

export default SortOption
