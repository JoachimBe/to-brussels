import React, { Component } from 'react';
import SideMenu from "./components/Sidemenu/Sidemenu.js";
import Backdrop from "./components/backdrop/backdrop.js";
class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      sideMenuOpen: false,
      places : {}
    };
  }

  handleChange(data){
console.log(data);
    this.setState({
      places:data
    })
  }

  menuToggleClickHandler = () =>{
    this.setState((prevState)=>{
      return {sideMenuOpen:!prevState.sideMenuOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideMenuOpen:false})
  };


  render() {
    
    let backdrop;

    if(this.state.sideMenuOpen){      
      backdrop= <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div>
        <SideMenu show={this.state.sideMenuOpen} menuClickHandler={this.menuToggleClickHandler} />
      </div>
    );
  }
}

export default App;
