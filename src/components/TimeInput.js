export function TimeInput({ label, defaultValue, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <>
      <label htmlFor={label}>{label + " Time:"}</label>
      <input type="time" id={label} name={label} defaultValue={defaultValue} onChange={(e) => handleChange(e)}></input>
    </>
  );
}