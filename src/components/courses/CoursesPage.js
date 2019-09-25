import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";

class CoursesPage extends Component {
  state = {
    redirectToAddCoursePage: false
  };

  componentDidMount() {
    const {
      courses,
      authors,
      actions: { forCourses, forAuthors }
    } = this.props;

    if (courses.length === 0) {
      forCourses
        .loadCourses()
        .catch(error => alert("Error Loading Courses: " + error));
    }

    if (authors.length === 0) {
      forAuthors
        .loadAuthors()
        .catch(error => alert("Error Loading Authors: " + error));
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}

        <h2>Courses</h2>

        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddCoursePage: true })}
        >
          Add Course
        </button>

        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  const { authors, courses } = state;
  return {
    courses:
      authors.length === 0
        ? []
        : courses.map(course => {
            return {
              ...course,
              authorName: authors.find(author => author.id === course.authorId)
                .name
            };
          }),
    authors
  };
};

const MapDispatchToProps = dispatch => {
  return {
    actions: {
      forCourses: bindActionCreators(courseActions, dispatch),
      forAuthors: bindActionCreators(authorActions, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(CoursesPage);
