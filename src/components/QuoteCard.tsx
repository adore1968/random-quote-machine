import { useAppContext } from "@/context/AppContext";
import { Quote } from "@/shared/interfaces";
import { FaTwitter, FaTumblr } from "react-icons/fa";

interface Props {
  quote: Quote;
}

function QuoteCard({ quote }: Props) {
  const { color, getQuote } = useAppContext();

  return (
    <div className="bg-gray-50 text-gray-950 p-5 rounded max-w-2xl flex-auto flex flex-col gap-10">
      <div style={{ color: `${color}` }}>
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-5">
          {quote.text}
        </h1>
        <p className="text-lg sm:text-xl text-right font-medium">
          -{quote.author}
        </p>
      </div>
      <div className="flex justify-between text-lg sm:text-xl text-gray-50">
        <div className="flex gap-5">
          <button
            className="px-4 py-2 rounded"
            style={{ backgroundColor: `${color}` }}
          >
            <FaTwitter />
          </button>
          <button
            className="px-4 py-2 rounded"
            style={{ backgroundColor: `${color}` }}
          >
            <FaTumblr />
          </button>
        </div>
        <button
          onClick={() => getQuote()}
          className="px-4 py-2 rounded"
          style={{ backgroundColor: `${color}` }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default QuoteCard;
