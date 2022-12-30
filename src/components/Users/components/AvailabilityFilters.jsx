export const AvailabilityFilters = ({ onChangeAvailability, checked}) => {
  return (
    <fieldset className="me-5">
      <legend>Availability:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>Open to work</span>
          <input checked={checked} className="form-check-input" type="checkbox" onChange={onChangeAvailability} />
        </label>
      </div>
    </fieldset>
  );
};