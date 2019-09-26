import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../home/HomePage";
import AboutPage from "../about/AboutPage";
import CoursesPage from "../courses/CoursesPage";
import PageNotFound from "../PageNotFound";
import ManageCoursePage from "../courses/ManageCoursePage"; //eslint-disable-line import/no-named-as-default

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/course/:slug" component={ManageCoursePage} />
      <Route path="/course" component={ManageCoursePage} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default AppRouter;
