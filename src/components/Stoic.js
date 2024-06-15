import { useState, useEffect } from "react";
import '../assets/stoic.css';

function Stoic() {
    const [quote, setQuote] = useState("");
    useEffect(() => {
      fetch('https://stoic-quotes.com/api/quote')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setQuote(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
    }, []);

    return (
        <>
            <main>
                <h1>STOIC QUOTE</h1>
                <div className="quote">"{quote.text}"</div>
                <div className="author">--{quote.author}</div>
            </main>
      </>
    );
}

export default Stoic;
