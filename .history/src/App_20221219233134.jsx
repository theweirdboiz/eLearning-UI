import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes, privateRoutes } from "@routes";
import { DefaultLayout } from "@layouts";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import
function App() {
  return (
    <Router>
      <div className="bg-backGround">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
    // <PayPalScriptProvider
    //   options={{
    //     "client-id":
    //       "ARpga80oguIoNV5Wnfsy3TiKVALbTAc9EHpzBwB0cUD0aZb3S7HLOIBoiGDrZ6xLTpr5P3ZPY48wK8ci",
    //   }}
    // >

    // </PayPalScriptProvider>
  );
}

export default App;
