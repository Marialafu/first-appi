import { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    getQuote(setQuote);
  }, []);

  if (!quote) return <h2>Loading...</h2>;

  return (
    <div>
      <h3>ADVICE #{quote.id}</h3>
      <h2>&quot;{quote.advice}&quot;</h2>
      <div></div>
      <button onClick={() => getQuote(setQuote)}>reload</button>
    </div>
  );
};

const getQuote = async setQuote => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const { slip } = await response.json();
    setQuote(slip);
  } catch (error) {
    return error;
  }
};

export default Quote;
