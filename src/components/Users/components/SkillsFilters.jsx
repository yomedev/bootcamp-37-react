/* eslint-disable */
const skillsList = [
  {label: 'All', value: 'all' },
  {label: 'React', value: 'react'},
  {label: 'Angular', value: 'angular'},
  {label: 'Vue', value: 'vue'},
]

export const SkillsFilters = ({onChangeSkills, value}) => {
  return (
    <fieldset className="ms-5">
      <legend>Skills:</legend>
      <div className="d-flex">
      {skillsList.map(skill => (
        <div key={skill.value} className="form-check me-4">
          <label className="form-check-label">
            <span>{skill.label}</span>
            <input className="form-check-input" type="radio" name="skills" value={skill.value} checked={value === skill.value}  onChange={onChangeSkills}  />
          </label>
        </div>
        ))} 
      </div>
    </fieldset>
  );
};