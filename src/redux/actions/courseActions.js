import actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi.js";

export function createCourse(course) {
  return {
    type: actionTypes.CREATE_COURSE,
    course
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: actionTypes.LOAD_COURSES_SUCCESS,
    courses
  };
}

export const loadCourses = function() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
};
