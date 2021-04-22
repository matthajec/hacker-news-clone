import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import PageNotFound from '../components/PageNotFound';
import ShowStories from '../components/ShowStories';

export default function AppRouter() {
  // route "/" automatically redirects to "/top"
  // any route that is not "/top", "/new", "/best" will redirect to "/", and then subsequently to "/top"

  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route
            path="/"
            render={() => (
              <Redirect to="/top" />
            )}
            exact={true}
          />

          <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
              if (!['top', 'new', 'best'].includes(type)) {
                return <Redirect to="/" />;
              }
              return <ShowStories type={type} />;
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}