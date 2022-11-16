const CheckBox = ({ label, onClick, checked }) => {
  const id = label.toLowerCase().split(" ").join("-")
  return (
    <div>
      <input type="checkbox" checked={checked} name={id} id={id} value={id} onClick={() => onClick(id)} readOnly />
      <label htmlFor={id}>{label}</label>
    </div> 
  )
}

export default CheckBox
