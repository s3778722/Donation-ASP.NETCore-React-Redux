import { ACTION_TYPES } from "../actions/donationCandidate";

const initialState = {
  data: [],
};

//Rules of Reducers
//1. They should only calculate the new state value based on the state and action arguments
//2. They are not allowed to modify the existing state. Instead, they must make immutable updates, 
//   by copying the existing state and making changes to the copied values.
//3. They must not do any asynchronous logic or other "side effects"

const donationCandidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        // copy the entire state object
        ...state,
        // overwrite the list value with action payload
        data: [...action.payload],
      };
    case ACTION_TYPES.CREATE:
      return {
        // copy the entire state object
        ...state,
        // overwrite the list value with the previous state list + action payload
        data: [...state.data, action.payload],
      };
    case ACTION_TYPES.UPDATE:
      return {
        // copy the entire state object
        ...state,
        // overwrite the list value with action payload if the id matches.
        data: state.data.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };

    case ACTION_TYPES.DELETE:
      return {
        // copy the entire state object
        ...state,
        // overwrite the list value by filtering out the item with id
        data: state.data.filter((x) => x.id !== action.payload),
      };

    default:
      return state;
  }
};

export default donationCandidateReducer;
