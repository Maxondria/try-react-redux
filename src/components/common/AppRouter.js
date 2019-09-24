import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../home/HomePage";
import AboutPage from "../about/AboutPage";
import CoursesPage from "../courses/CoursesPage";
import PageNotFound from "../PageNotFound";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default AppRouter;
