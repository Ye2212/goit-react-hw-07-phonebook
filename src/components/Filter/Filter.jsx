import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { FilterLabel, FilterText, FilterInput } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();

  const changeFilterInput = e => dispatch(changeFilter(e.currentTarget.value));
  return (
    <FilterLabel>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput type="text" name="filter" onChange={changeFilterInput} />
    </FilterLabel>
  );
}

export default Filter;
