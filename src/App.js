import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/Home';
import Greeting from './components/Greeting';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
