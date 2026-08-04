export default function ChatWidget() {
  return (
    <div className="fixed bottom-10 right-10 w-16 h-16 bg-white rounded-full flex justify-center items-center cursor-pointer shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)] z-50 transition-all hover:scale-105 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.2)] group">
      <svg
        className="w-7 h-7 text-[#E31837] transition-transform group-hover:scale-110"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        <line x1="9" y1="10" x2="15" y2="10"></line>
        <line x1="9" y1="14" x2="15" y2="14"></line>
      </svg>
    </div>
  );
}
