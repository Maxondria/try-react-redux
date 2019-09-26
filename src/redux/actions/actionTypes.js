export default {
  CREATE_COURSE_SUCCESS: "CREATE_COURSE_SUCCESS",
  UPDATE_COURSE_SUCCESS: "UPDATE_COURSE_SUCCESS",
  LOAD_COURSES_SUCCESS: "LOAD_COURSES_SUCCESS",
  LOAD_AUTHORS_SUCCESS: "LOAD_AUTHORS_SUCCESS",
  BEGIN_API_CALL: "BEGIN_API_CALL",
  API_CALL_ERROR: "API_CALL_ERROR",
  // By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
  // API call. But since we're doing an optimistic delete, we're hiding loading state.
  // So this action name deliberately omits the "_SUCCESS" suffix.
  // If it was true, our Loading Status would be false
  // because we're not setting our LoadingStatus to true when the delete request begins.
  DELETE_COURSE_OPTIMISTIC: "DELETE_COURSE_OPTIMISTIC"
};
