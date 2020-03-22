export const constants = {
  FETCH_USER_REQUEST: "FETCH_USER_REQUESTS",
  FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE: "FETCH_USER_FAILURE"
};

export const actions = {
  fetchUsersRequest: () => ({
    type: constants.FETCH_USER_REQUEST
  }),
  fetchUsersSuccess: users => ({
    type: constants.FETCH_USER_SUCCESS,
    payload: users
  }),
  fetchUsersFailure: error => ({
    type: constants.FETCH_USER_SUCCESS,
    payload: error
  })
};
