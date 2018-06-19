import React, { Component } from 'react';
import Layout from './components/Layouts/Layout';
import BurgerBuilder from './containers/Burgerbuilder/Burgerbuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
