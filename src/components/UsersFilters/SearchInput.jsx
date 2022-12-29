export const SearchInput = ({search, onChangeSearch, onResetSearch, onSubmitSearch}) => {
  return (
    <div className="input-group input-group-lg mb-5">
      <input type="text" value={search} onChange={onChangeSearch} className="form-control" placeholder="Type to search ..." />
      <button className="btn btn-outline-primary" type="button" onClick={onSubmitSearch}>
        Search
      </button>
      <button className="btn btn-outline-secondary" type="button" onClick={onResetSearch}>
        Reset
      </button>
    </div>
  );
};