const RadioButton = ({ label, defaultChecked, onClick }) => {
  const id = label.toLowerCase().split(" ").join("-")
  return (
    <div>
      <input type="radio" name="sort-parameter" id={id} value={id} defaultChecked={defaultChecked} onClick={() => onClick(id)} />
      <label htmlFor={id}>{label}</label>
    </div> 
  )
}

export default RadioButton
