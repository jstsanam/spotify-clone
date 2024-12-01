import Card from "./Card";

export default function HomeScreen() {
  return (
    <div
      className="rounded-md mr-2 pl-4 pr-4 pt-3 overflow-hidden hover:overflow-y-scroll"
      style={{
        background: "linear-gradient(to bottom, #212121 10%, #121212 90%)",
        width: "77%",
      }}
    >
      <Card />
    </div>
  );
}
