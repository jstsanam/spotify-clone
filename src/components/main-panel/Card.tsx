import { sections } from "./json-data";

export default function Card() {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <div key={section.heading}>
          <h5 className="text-xl font-bold">{section.heading}</h5>
          <div className="flex flex-wrap gap-4 mt-4">
            {section.data.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt="icon"
                  className={`h-28 w-28 object-cover ${section.imageBorder}`}
                />
                {item.title !== "" && (
                  <div className="font-semibold text-xs mt-2">{item.title}</div>
                )}
                <div
                  className="mt-2 font-semibold text-gray-400 break-words"
                  style={{ fontSize: "0.7rem", maxWidth: "7rem" }}
                >
                  {item.subtitle.length >= 30
                    ? item.subtitle.substring(0, 30) + "..."
                    : item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
