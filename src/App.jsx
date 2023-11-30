import { useState } from 'react'
import quotes from './assets/quotes.json'
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import './App.css'

const getRandomQuote = () => {
  const index = Math.floor(Math.random() * quotes.quotes.length);
  const quote = quotes.quotes[index];
  return quote;
}

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return `rgb(${red}, ${green}, ${blue})`;
}

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [randomColor, setRandomColor] = useState(getRandomColor());

  const changeQuote = () => {
    setTimeout(() => {
      setQuote(getRandomQuote());
      setRandomColor(getRandomColor());
    }, 1000);
  }

  return (
    <div className='background' style={{backgroundColor: randomColor, transition}}>
      <div id="quote-box">
        <div className='quote-content' style={{color: randomColor, transition}}>
          <h2 id="text">
            <FaQuoteLeft size="30" style={{marginRight: "10px"}}/> {quote.quote} <FaQuoteRight size="30" style={{marginRight: "10px"}}/>
          </h2>
          <h4 id="author">
            - {quote.author}
          </h4>
        </div>
        <div className='buttons'>
          <a id='tweet-quote' href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}%20-%20${quote.author}`} 
          style={{
            backgroundColor: randomColor,
            marginRight: "10px",
            transition}}>
            <FaTwitter color='white'/>
          </a>
          <button id="new-quote" onClick={() => changeQuote()} style={{backgroundColor: randomColor, transition}}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
