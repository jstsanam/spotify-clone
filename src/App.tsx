import Header from "./components/Header";
import SidePanel from "./components/side-panel/SidePanel";
import HomeScreen from "./components/main-panel/HomeScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="flex gap-2" style={{ height: "29rem" }}>
        <SidePanel />
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
}

export default App;
