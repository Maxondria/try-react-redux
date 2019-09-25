import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

const MangeCoursePage = ({ courses, authors, loadCourses, loadAuthors }) => {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch(error => alert("Error Loading Courses: " + error));
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => alert("Error Loading Authors: " + error));
    } 
  }, []);

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
};

MangeCoursePage.propTypes = {
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { authors, courses } = state;
  return { courses, authors };
};

const MapDispatchToProps = { loadCourses, loadAuthors };

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(MangeCoursePage);
