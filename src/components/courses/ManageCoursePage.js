import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";
import Spinner from "../common/Spinner";

const MangeCoursePage = ({
  courses,
  authors,
  loadCourses,
  saveCourse,
  loadAuthors,
  history,
  ...props
}) => {
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setCourse(prevState => ({
      ...prevState,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  };

  const handleSave = event => {
    event.preventDefault();
    saveCourse(course)
      .then(() => {
        history.push("/courses");
      })
      .catch(error => alert("Error Saving Course: " + error));
  };

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => alert("Error Loading Courses: " + error));
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => alert("Error Loading Authors: " + error));
    }
  }, [props.course]);

  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <CourseForm
      course={course}
      authors={authors}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
};

MangeCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

const getCourseBySlug = (courses, slug) => {
  return courses.find(course => course.slug === slug) || null;
};

const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;

  const { authors, courses } = state;
  return { course, courses, authors };
};

const MapDispatchToProps = { loadCourses, loadAuthors, saveCourse };

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(MangeCoursePage);
