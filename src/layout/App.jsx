import React, { Component } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import routes from "../routes/routers";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

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
        <Header />
        <div className='main'>{this.showContentMenus(routes)}</div>
        <Footer />
        <ToastContainer
          position='top-center'
          autoClose={3000}
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

export default App;
