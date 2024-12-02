const cardsData = [
  {
    title: "Create your first playlist",
    subtitle: "It's easy, we'll help you",
    buttonText: "Create playlist",
  },
  {
    title: "Lt's find some podcasts to follow",
    subtitle: "We'll keep you updated on new episodes",
    buttonText: "Browse podcasts",
  },
];

export default function SidePanelCards() {
  return (
    <div className="m-2 overflow-hidden hover:overflow-y-scroll" style={{height: "15rem"}}>
      {cardsData.map((cardData: any) => (
        <div className="p-3 mb-4 mt-2 rounded-md" style={{backgroundColor: "#1f1f1f"}}>
          <h5 className="font-bold text-sm tracking-tight mb-1">
            {cardData.title}
          </h5>
          <p className="font-semibold text-gray-200 text-xs mb-4">
            {cardData.subtitle}
          </p>
          <button
            type="button"
            className="text-gray-900 bg-gray-100 hover:bg-gray-200 font-bold rounded-full text-xs px-2 py-1.5 text-center inline-flex items-center"
          >
            {cardData.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}
