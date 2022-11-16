const FilterOption = ({name, label, selection, onClick}) => {
  const id = label.toLowerCase().split(" ").join("-")
  const checked = selection === id
  return (
    <div>
      <input type="radio" name={name} id={id} value={id} checked={checked} onClick={() => onClick(name, !checked ? id : "")} readOnly />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default FilterOption
