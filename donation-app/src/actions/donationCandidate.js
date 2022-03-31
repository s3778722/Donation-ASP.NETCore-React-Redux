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
/** Similar
const fetchAllFunction = (response) => {
  return {
    type: ACTION_TYPES.FETCH_ALL,
    payload: response.data,
  };
};
*/

const fetchAllFunction = (response) => ({
  type: ACTION_TYPES.FETCH_ALL,
  payload: response.data,
});

const createFunction = (response) => ({
  type: ACTION_TYPES.CREATE,
  payload: response.data,
});

const updateFunction = (id, data) => ({
  type: ACTION_TYPES.UPDATE,
  //{id, ...data } is a shorthand for {id: id, ...data }
  payload: { id, ...data },
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

export const create = (data, onSuccess) => {
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

export const update = (id, data, onSuccess) => {
  return (dispatch) => {
    api()
      .update(id, data)
      .then((response) => {
        dispatch(updateFunction(id, data));
        onSuccess();
      })
      .catch((error) => console.log(error));
  };
};

//Another way to write dispatch
export const Delete = (id, onSuccess) => (dispatch) => {
  api()
    .delete(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((error) => console.log(error));
};
