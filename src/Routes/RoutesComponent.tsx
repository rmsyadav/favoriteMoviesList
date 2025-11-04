import { Routes, Route } from "react-router-dom";
import MovieList from "../MovieList";
import SingleSelectDropdown from "../Components/SinleSelectDropdown";
import MultipleSelectDropdown from "../Components/MultipleSelectDropdown";
import InputSearchField from "../Components/InputSerchField";
import CheckBox from "../Components/Checkbox";
import CustomTable from "../Components/CustomTable";
import MovieDetailsPage from "../MovieDetailsPage";

const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route element={<MovieList/>} path="/"></Route>/multi-select-dropdown
        <Route element={<SingleSelectDropdown/>} path="/single-select-dropdown"></Route>
        <Route element={<MultipleSelectDropdown/>} path="/multi-select-dropdown"></Route>
        <Route element={<InputSearchField/>} path="/Input-search-field"></Route>
        <Route element={<CheckBox/>} path="/checkbox"></Route>
        <Route element={<CustomTable/>} path="/custom-table"></Route>
        <Route element={<MovieDetailsPage/>} path="/movie-details-page/:id"></Route>
      </Routes>
    </>
  );
};

export default RoutesComponent;
