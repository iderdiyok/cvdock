function FieldInput({ id, label, value, onChange }) {
  return (
    <div className="form-editor__content__input-label-flex">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} value={value} onChange={onChange} />
    </div>
  );
}

export default function useFieldInput({ id, label, value, onChange }) {
  return <FieldInput id={id} label={label} value={value} onChange={onChange} />;
}
