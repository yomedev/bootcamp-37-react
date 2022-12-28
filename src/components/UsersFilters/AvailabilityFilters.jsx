export const AvailabilityFilters = () => {
  return (
    <fieldset className="my-4">
      <legend>Availability:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>Open to work</span>
          <input className="form-check-input" type="checkbox" />
        </label>
      </div>
    </fieldset>
  );
};