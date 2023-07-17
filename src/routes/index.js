import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainLayout from '../layouts/main';

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
