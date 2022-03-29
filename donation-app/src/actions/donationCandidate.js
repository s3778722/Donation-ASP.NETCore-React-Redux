export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

/** Similar 
function fetchAll() {
  return {
    type: ACTION_TYPES.FETCH_ALL,
    payload: [],
  };
}
*/

const fetchAllFunction = () => ({
  type: ACTION_TYPES.FETCH_ALL,
  payload: [],
});

export const fetchAll = () => {
  return (dispatch) => {
    dispatch(fetchAllFunction());
  };
};  