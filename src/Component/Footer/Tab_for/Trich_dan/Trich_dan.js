import $ from 'jquery';
import React, { useEffect, useState } from "react";
import { Trich_dan_Data } from "./Data/Trich_dan_data.js";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import { AiOutlineTwitter } from 'react-icons/ai';
import { TwitterShareButton } from "react-share";

const Trich_dan = function(props) {

const [quote, setQuote] = useState("");
const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {

    let dataQuotes = Trich_dan_Data;
    let randomNum = Math.floor(Math.random() * dataQuotes.length);
    let randomQuote = dataQuotes[randomNum];

    setQuote(randomQuote.q);
    setAuthor(randomQuote.a);
  };

  return (
    <div className="">

    <div className="ttrt">

      <div className="Trich_dan_line">
        <FaQuoteLeft  className="dsfjnkdsjnx"/> {quote} <FaQuoteRight className="dsfjnkdsjnx"/>
      </div>

      <div className="yyuy">-{author}-</div>

      <div className="idjkjs">
        <TwitterShareButton title={["Câu trích dẫn yêu thích của tôi: " + quote]}
                            url={"https://wsin.com/"}
                            hashtags={["World_singularity"]}
        >
          <AiOutlineTwitter className="vcxdaewe"/>
        </TwitterShareButton>
      <div>
        <button className="nuttts" onClick={getQuote}>Next Quote</button>
        </div>
      </div>
    </div>

    </div>
  )
}
export default Trich_dan;
