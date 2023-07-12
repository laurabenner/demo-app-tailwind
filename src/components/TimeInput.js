export function TimeInput({ label, defaultValue, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <>
      <label className="hidden xl:inline" htmlFor={label}>{label + " Time:"}</label>
      <input
        className="border-2 focus:border-asia-trail rounded-full px-5 py-2.5 m-2 hidden xl:inline-flex text-asia-trail"
        type="time"
        id={label}
        name={label}
        defaultValue={defaultValue}
        onChange={(e) => handleChange(e)}>
      </input>
    </>
  );
}