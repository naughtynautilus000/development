const CheckBox = ({ label, onClick, filters }) => {
  const id = label.toLowerCase().split(" ").join("-")
  return (
    <div>
      <input type="checkbox" checked={filters.includes(id)} name={id} id={id} value={id} onClick={e => onClick(e, id)} />
      <label htmlFor={id}>{label}</label>
    </div> 
  )
}

export default CheckBox
