import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ loggedIn, children, path }) {
  return (
    <Route exact path={path}>
      {loggedIn ? children : <Redirect to="/" />}
    </Route>
  );
}

export default ProtectedRoute;
