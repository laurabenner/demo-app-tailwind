export function TimeInput({ label, defaultValue, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <>
      <label htmlFor={label}>{label + " Time:"}</label>
      <input className="border-2 border-gray-200 rounded-full px-5 py-2.5 m-2 text-teal-900" type="time" id={label} name={label} defaultValue={defaultValue} onChange={(e) => handleChange(e)}></input>
    </>
  );
}