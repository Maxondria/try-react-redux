import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

const MangeCoursePage = ({
  courses,
  authors,
  loadCourses,
  saveCourse,
  loadAuthors,
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
    saveCourse(course).catch(error => alert("Error Saving Course: " + error));
  };

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => alert("Error Loading Courses: " + error));
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => alert("Error Loading Authors: " + error));
    }
  }, []);

  return (
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
  authors: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { authors, courses } = state;
  return { course: newCourse, courses, authors };
};

const MapDispatchToProps = { loadCourses, loadAuthors, saveCourse };

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(MangeCoursePage);
