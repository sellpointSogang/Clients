function RadioGroup({ label, children }) {
  return (
    <fieldset style={{ marginTop: "17px" }}>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
}

export default RadioGroup;
