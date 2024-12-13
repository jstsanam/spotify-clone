import { useState } from "react";
import { cardsData } from "data/cardsData";
import clsx from 'clsx';

export default function MainPanelCards() {
  const [hoveredCard, setHoveredCard] = useState<{
    sectionIndex: number;
    itemIndex: number;
  } | null>(null);

  return (
    <div className="space-y-12">
      {cardsData.map((section, sectionIndex) => (
        <div key={section.heading}>
          <h5 className="text-xl font-bold">{section.heading}</h5>
          <div className="flex flex-wrap mt-4">
            {section.data.map((item, itemIndex) => (
              <div
                key={itemIndex}
                onMouseEnter={() => setHoveredCard({ sectionIndex, itemIndex })}
                onMouseLeave={() => setHoveredCard(null)}
                className={clsx(
                  "p-2 rounded-md cursor-pointer relative",
                  hoveredCard?.sectionIndex === sectionIndex &&
                    hoveredCard?.itemIndex === itemIndex && "bg-gray-200/10"
                )}
              >
                <img
                  src={item.image}
                  alt="icon"
                  className={`h-28 w-28 object-cover ${section.imageBorder}`}
                />
                {item.title !== "" && (
                  <div className="font-semibold text-xs mt-2 hover:underline">
                    {item.title}
                  </div>
                )}
                <div
                  className="mt-2 font-semibold text-gray-400 break-words text-xs max-w-28"
                >
                  {item.subtitle.length >= 30
                    ? item.subtitle.substring(0, 30) + "..."
                    : item.subtitle}
                </div>
                {hoveredCard?.sectionIndex === sectionIndex &&
                  hoveredCard?.itemIndex === itemIndex && (
                    <button className="absolute bottom-16 right-3 bg-green-500 text-black rounded-full p-2 m-0 shadow-xl hover:bg-green-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M320-200v-560l440 280-440 280Z" />
                      </svg>
                    </button>
                  )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
