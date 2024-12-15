import MainPanelCards from "./MainPanelCards";
import MainPanelFooter from "./MainPanelFooter";

export default function MainPanel() {
  return (
    <div className="rounded-md mr-2 pl-4 pt-3 overflow-y-scroll bg-gradient-to-b from-zinc-800 to-zinc-900 w-4/5">
      <MainPanelCards />
      <MainPanelFooter />
    </div>
  );
}
