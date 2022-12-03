import './App.css';
import { TopPage } from './components/toppage';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { ColumnPage } from './components/columnpage';
import { RecordPage } from './components/recordpage';
import { Sidebutton } from './components/sidebutton';
import { AppContext, useReuseRouteContext } from './common/hooks/useReuseRouteContext';
import { ROUTE } from './common/constants';
import { useContext } from 'react';

function App() {
  const { Provider, value } = useReuseRouteContext(ROUTE.COLUMN_PAGE);
  return (
    <Provider value={{ ...value }}>
      <AppBody />
    </Provider>
  );
}

const AppBody = () => {
  const { currentRoute } = useContext(AppContext);

  return <div className='app__container'>
    <Header />
    {currentRoute === ROUTE.TOP_PAGE && <TopPage />}
    {currentRoute === ROUTE.COLUMN_PAGE && <ColumnPage />}
    {currentRoute === ROUTE.RECORD_PAGE && <RecordPage />}
    <Sidebutton />
    <Footer />
  </div>
}

export default App;
