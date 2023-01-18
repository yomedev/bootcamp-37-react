import { useDispatch, useSelector } from 'react-redux';
import { changeSkillsAction } from '../../../redux/users/reducer.users';

/* eslint-disable */
const skillsList = [
  { label: 'All', value: 'all' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Vue', value: 'vue' },
];

export const SkillsFilters = () => {
  const value = useSelector((state) => state.users.filters.skills);
  const dispatch = useDispatch();
  return (
    <fieldset className='ms-5'>
      <legend>Skills:</legend>
      <div className='d-flex'>
        {skillsList.map((skill) => (
          <div key={skill.value} className='form-check me-4'>
            <label className='form-check-label'>
              <span>{skill.label}</span>
              <input
                className='form-check-input'
                type='radio'
                name='skills'
                value={skill.value}
                checked={value === skill.value}
                onChange={(event) => dispatch(changeSkillsAction(event.target.value))}
              />
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
