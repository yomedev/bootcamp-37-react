import { AvailabilityFilters } from './AvailabilityFilters';
import { SkillsFilters } from './SkillsFilters';
import {FiPlus} from 'react-icons/fi'
import { SearchInput } from './SearchInput';

export const UsersFilters = ({ onSubmitSearch, onChangeSearch, onResetSearch, onChangeAvailability, onChangeSkills, filters}) => {
  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <AvailabilityFilters checked={filters.isAvailable} onChangeAvailability={onChangeAvailability} />
        <SkillsFilters skills={filters.skills} onChangeSkills={onChangeSkills} />
        <button type="button" className="btn btn-primary btn-lg ms-auto">
          <FiPlus />
        </button>
      </div>

      <SearchInput onSubmitSearch={onSubmitSearch} onChangeSearch={onChangeSearch} onResetSearch={onResetSearch} search={filters.search} />
    </>
  );
};