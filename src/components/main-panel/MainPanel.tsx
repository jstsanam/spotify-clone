import MainPanelCards from "./MainPanelCards";
import MainPanelFooter from "./MainPanelFooter";

export default function MainPanel() {
  return (
    <div className="rounded-md mr-2 pl-4 pt-3 overflow-y-scroll bg-[linear-gradient(to_bottom,#212121_0%,#121212_100%)] w-[79%]">
      <MainPanelCards />
      <MainPanelFooter />
    </div>
  );
}
