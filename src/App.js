import Header from "./components/Header";
import Footer from "./components/Footer";
import Orders from "./components/Orders";
import Prototypes from "./components/Prototypes";
import AppStatProvider from "./Providers/AppStateProvider";

function App() {
  return (
    <AppStatProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStatProvider>
  );
}

export default App;
