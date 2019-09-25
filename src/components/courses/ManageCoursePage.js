import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

class MangeCoursePage extends Component {
  componentDidMount() {
    const { courses, authors, loadCourses, loadAuthors } = this.props;

    if (courses.length === 0) {
      loadCourses().catch(error => alert("Error Loading Courses: " + error));
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => alert("Error Loading Authors: " + error));
    }
  }

  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}

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

