
import MainPage from './components/MainPage/MainPage';
import MainPageNav from "./components/MainPageNav/MainPageNav";
import { Fragment } from 'react';

import './App.scss';

function App(props) {
  return (
    <Fragment>
      <MainPageNav mainpageNavState={props.appState} />
      <MainPage mainpageState={props.appState} />
    </Fragment>
  );
}

export default App;
