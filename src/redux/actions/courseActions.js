import actionTypes from "./actionTypes";
import * as courseApi from "../../api/courseApi.js";
import { beginApiCall } from "./apiStatusActions";

export function createCourseSuccess(course) {
  return {
    type: actionTypes.CREATE_COURSE_SUCCESS,
    course
  };
}

export function updateCourseSuccess(course) {
  return {
    type: actionTypes.UPDATE_COURSE_SUCCESS,
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
    dispatch(beginApiCall());
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

export const saveCourse = function(course) {
  return function(dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        throw error;
      });
  };
};
