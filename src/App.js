import './App.css';

import ApiProvider from './components/dataProvider/DataProvider';

import Home from './pages/home/Home';

function App() {
  return (
    <ApiProvider>
      {' '}
      <div className='App'>
        <Home />
      </div>
    </ApiProvider>
  );
}

export default App;
