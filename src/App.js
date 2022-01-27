import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TansactionList } from './components/TansactionList';
import { AddTansaction } from './components/AddTansaction';

function App() {
  return (
    <div className="App">
       
      <Header />

      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TansactionList />
        <AddTansaction />
      </div>
    </div>
  );
}

export default App;
