import { useParams, useLocation, useNavigate } from "react-router-dom";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    let location = useLocation();
    let navigate = useNavigate();
    return (
      <Children
        {...props}
        match={match}
        location={location}
        navigate={navigate}
      />
    );
  };
}
