import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TansactionList } from './components/TansactionList';
import { AddTansaction } from './components/AddTansaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       
      <Header />

      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TansactionList />
        <AddTansaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
