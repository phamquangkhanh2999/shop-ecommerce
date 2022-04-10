import React, { Component } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import routes from "../routes/routers";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import { withRouter } from "../hooks/withRouter";

class App extends Component {
  showContentMenus = (routes) => {
    let result = null;

    if (routes.length > 0) {
      result = routes.map((router, index) => (
        <Route
          key={index}
          path={router.path}
          exact={router.exact}
          element={router.element}
        />
      ));
    }
    return <Routes>{result}</Routes>;
  };
  render() {
    return (
      <div className='app'>
        {this.props.location.pathname !== "/checkout" ? <Header /> : null}
        <div className='main'>{this.showContentMenus(routes)}</div>
        {this.props.location.pathname !== "/checkout" ? <Footer /> : null}

        <ToastContainer
          position='top-center'
          autoClose={2000}
          transition={Slide}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default withRouter(App);
