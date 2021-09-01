import React from "react";
import Table from './Table/Table';
import Footer from './Component/Footer';
import Header from './Component/Header';
 

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header/> 
        <Table/>
        <Footer/>
      </div>
    )
  }
}



export default App;

