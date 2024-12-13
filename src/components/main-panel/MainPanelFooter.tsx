import { footerData } from "data/footerData";

export default function MainPanelFooter() {
  return (
    <div className="mt-16 mb-8 p-2">
      <div className="flex justify-between items-start">
        <div className="flex gap-24">
          {footerData.map((footerList) => (
            <div key={footerList.heading}>
              <div className="text-xs font-bold mb-2">{footerList.heading}</div>
              <ul className="space-y-2">
                {footerList.data.map((listName) => (
                  <li className="text-xs font-semibold text-gray-400 hover:text-gray-200 hover:underline cursor-pointer">
                    {listName}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-600">
            <img src="/images/social-links/instagram.png" className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-600">
            <img src="/images/social-links/twitter.png" className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-600">
            <img src="/images/social-links/facebook.png" className="h-5 w-5" />
          </button>
        </div>
      </div>
      <hr className="border-gray-600 mt-8 mb-8" />
      <div className="text-xs font-semibold text-gray-400 mb-8">
        © 2024 Spotify AB
      </div>
    </div>
  );
}
