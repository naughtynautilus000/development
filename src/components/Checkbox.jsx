const CheckBox = ({ label, onClick }) => {
  const id = label.toLowerCase().split(" ").join("-")
  return (
    <div>
      <input type="checkbox" name={id} id={id} value={id} onClick={e => onClick(e, id)} />
      <label htmlFor={id}>{label}</label>
    </div> 
  )
}

export default CheckBox
