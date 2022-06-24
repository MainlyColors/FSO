import FormInput from './FormInput';

function PersonForm({
  nameValue,
  numberValue,
  nameOnChange,
  numberOnChange,
  formOnSubmit,
}) {
  return (
    <form onSubmit={formOnSubmit}>
      <FormInput
        htmlFor="name"
        value={nameValue}
        onChange={nameOnChange}
        labelText="name"
      />
      <br />
      <FormInput
        htmlFor="number"
        value={numberValue}
        onChange={numberOnChange}
        labelText="number"
      />

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

export default PersonForm;
