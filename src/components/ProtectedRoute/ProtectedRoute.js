import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ loggedIn, children, path }) {
  console.log('loggedIn PR', loggedIn)
  return (
    <Route exact path={path}>
      {loggedIn ? children : <Redirect to="/signin" />}
    </Route>
  );
}

export default ProtectedRoute;
