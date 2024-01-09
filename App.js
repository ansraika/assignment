import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Balance from "./Balance";
import TransactionTable from "./TransactionTable";

function App() {
  return (
      <div className="App">
          <Header/>
          <Balance/>
          <TransactionTable/>
      </div>
  );
}

export default App;
