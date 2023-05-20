import Header from "./components/Header";
import Footer from "./components/Footer";
import Orders from "./components/Orders";
import Prototypes from "./components/Prototypes";
import AppStatProvider from "./Providers/AppStateProvider";
import { BrowserRouter, Link, Route, Routes, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";

function App() {
  return (
    // <AppStatProvider>
    //   <Header />
    //   <div className="container">
    //     <Prototypes />
    //     <Orders />
    //     <Footer />
    //   </div>
    // </AppStatProvider>

    <AppStatProvider>
      <Header />
      <div className="container">
        <Routes>
          {/* "/" 경로에 Prototypes와 Orders 두개 컴포넌트를 모두 보여주기 위해서 배열로..(key추가) */}
          <Route
            path="/"
            element={[<Prototypes key={"1"} />, <Orders key={"2"} />]}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* "/" 경로에 Prototypes와 Orders 두개 컴포넌트를 모두 보여주기 위해서 Routes를 추가 함. */}
        {/* <Routes>
          <Route path="/" element={<Orders />} />
        </Routes> */}
      </div>
      <Footer />
    </AppStatProvider>
  );
}

export default App;
