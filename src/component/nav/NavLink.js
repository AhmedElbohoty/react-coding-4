import React from "react";
import { Link, withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function NavLink({ location, base, label }) {
  const pathname = location.pathname.split("/").reverse()[0];

  return (
    <CSSTransition
      in={pathname === base}
      appear={true}
      timeout={400}
      classNames="nav-link"
    >
      <Link className="nav-link" to={`/${base}`}>
        {label}
      </Link>
    </CSSTransition>
  );
}

export default withRouter(NavLink);
