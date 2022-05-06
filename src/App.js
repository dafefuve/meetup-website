import { Route, Switch } from "react-router-dom";
import FavoritesPage from "./pages/Favorities";
import NewMeetupPage from "./pages/NewMeetup";
import AllMeetupsPage from "./pages/AllMeetups";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
