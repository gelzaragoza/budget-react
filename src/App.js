import { Container } from 'semantic-ui-react';
import './App.css';
import NewEntryForm from './components/NewEntryForm';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplaceBalances from './components/DisplaceBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title='Budget' />

      <DisplayBalance title="Your Balance:" value='₱25,553.50' size='small' />
      <DisplaceBalances />
      <MainHeader title='History' type='h3' />
      <EntryLine description="Income" value='₱1,000.00' />
      <EntryLine description="Expense" value='₱5,00.00' isExpense/>

      <MainHeader title='Add New Transaction' type='h3' />
      <NewEntryForm />

    </Container>
  );
}

export default App;
