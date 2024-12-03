import Header from "./components/Header";
import SidePanel from "./components/side-panel/SidePanel";
import MainPanel from "./components/main-panel/MainPanel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="flex gap-2 h-[29rem]">
        <SidePanel />
        <MainPanel />
      </main>
      <Footer />
    </>
  );
}

export default App;
