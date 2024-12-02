import MainPanelCards from "./MainPanelCards";
import MainPanelFooter from "./MainPanelFooter";

export default function MainPanel() {
  return (
    <div
      className="rounded-md mr-2 pl-4 pt-3 overflow-y-scroll"
      style={{
        background: "linear-gradient(to bottom, #212121 0%, #121212 100%)",
        width: "79%",
      }}
    >
      <MainPanelCards />
      <MainPanelFooter />
    </div>
  );
}
