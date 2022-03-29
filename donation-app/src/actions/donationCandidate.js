import api from "./api";

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

const fetchAllFunction = (response) => ({
  type: ACTION_TYPES.FETCH_ALL,
  payload: response.data,
});

const createFunction = (response) => ({
  type: ACTION_TYPES.CREATE,
  payload: response.data,
});

export const fetchAll = () => {
  return (dispatch) => {
    api()
      .fetchAll()
      .then((response) => {
        dispatch(fetchAllFunction(response));
      })
      .catch((error) => console.log(error));
  };
};

export const create = (data,onSuccess) => {
  return (dispatch) => {
    api()
      .create(data)
      .then((response) => {
        dispatch(createFunction(response));
        onSuccess();
      })
      .catch((error) => console.log(error));
  };
};
