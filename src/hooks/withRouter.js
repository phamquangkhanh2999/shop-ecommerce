import { useParams, useLocation } from "react-router-dom";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    let location = useLocation();
    return <Children {...props} match={match} location={location} />;
  };
}
