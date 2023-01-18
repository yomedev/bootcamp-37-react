import { useDispatch, useSelector } from "react-redux";
import { changeIsAvailableAction } from "../../../redux/users/reducer.users";

/* eslint-disable */
export const AvailabilityFilters = () => {
  const isAvailable = useSelector(state => state.users.filters.isAvailable)
  const dispatch = useDispatch()
  return (
    <fieldset className="me-5">
      <legend>Availability:</legend>

      <div className="form-check">
        <label className="form-check-label">
          <span>Open to work</span>
          <input checked={isAvailable} className="form-check-input" type="checkbox" onChange={() => dispatch(changeIsAvailableAction())} />
        </label>
      </div>
    </fieldset>
  );
};