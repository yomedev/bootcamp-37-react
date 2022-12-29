
const skillsList = [
  {label: 'React', value: 'react'},
  {label: 'Angular', value: 'angular'},
  {label: 'Vue', value: 'vue'},
]

export const SkillsFilters = ({onChangeSkills, skills}) => {
  return (
    <fieldset className="ms-5">
      <legend>Skills:</legend>


      <div className="d-flex">
      {skillsList.map(skill => (
        <div key={skill.value} className="form-check me-4">
          <label className="form-check-label">
            <span>{skill.label}</span>
            <input className="form-check-input" value={skill.value} checked={skills === skill.value} type="radio" name="skills" onChange={onChangeSkills} />
          </label>
        </div>
        ))} 
      </div>
    </fieldset>
  );
};