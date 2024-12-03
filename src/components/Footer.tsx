export default function Footer() {
  return (
    <div className="fixed inset-x-0 bottom-0 flex justify-between items-center m-2 pl-3 pr-3 pt-2 pb-2 bg-[linear-gradient(to_right,#ae2996,#825fc3,#519af4)]">
      <div>
        <p className="text-xs font-bold">Preview of Spotify</p>
        <p className="text-sm">
          Signup to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <button
        type="button"
        className="text-gray-900 bg-gray-100 hover:bg-gray-200 font-bold rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center"
      >
        Sign up free
      </button>
    </div>
  );
}
