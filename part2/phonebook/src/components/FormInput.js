function FormInput({ htmlFor, value, onChange, labelText }) {
  return (
    <>
      <label htmlFor={htmlFor}>{labelText}: </label>
      <input id={htmlFor} value={value} onChange={onChange} />
    </>
  );
}

export default FormInput;
