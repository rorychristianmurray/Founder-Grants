// Dependencies
import axios from "axios";

// Objects
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FILTER_GRANTS,
  FILTER_GRANTS_RESET,
  SELECT_GRANT
} from "./types";

export const fetchApi = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`https://labs16-grantly.herokuapp.com/api/grants/`)
    .then(response => {
      console.log("GET response", response);
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("GET error", error);
      dispatch({ type: FETCH_ERROR });
    });
};

export const filterGrants = filters => dispatch => {
  let numCheck = 0;
  //either call to database and return specific grants
  //or filter the list of grants in the redux store
  Object.values(filters).map(filter => {
    filter.length !== 0 && numCheck++;
  });
  numCheck === 0
    ? dispatch({ type: FILTER_GRANTS_RESET })
    : dispatch({ type: FILTER_GRANTS, payload: filters });

  //initial thoughts is to have filters be an array  becuase users will be able to select multiple grant filter
  //Now filters will be an object that contains different arrays
  // dispatch({ type: FILTER_GRANTS, payload: filters });
};

export const selectGrant = grant => dispatch => {
  dispatch({ type: SELECT_GRANT, payload: grant });
};
