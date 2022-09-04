import News from './components/News'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
  return (
    <div className="app">
      <h1>CoinStack</h1>
      <div className='app-wrapper'>
        <CurrencyConverter />
        <News />
      </div>
    </div>
  );
}

export default App
