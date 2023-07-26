import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./common";
import { Footer, Header } from "./components";
import Router from "./router/Router";
import ContextProvider from "./context/ContextProvider";
function App() {
  return (
    <Fragment>
      <GlobalStyles>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="main">
          <ContextProvider>
            <Header />
          </ContextProvider>
          <Router />
        </div>
        <Footer />
      </GlobalStyles>
    </Fragment>
  );
}

export default App;
