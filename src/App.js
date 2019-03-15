import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Nombre from './Componentes/Nombre';
// import Botones from './Componentes/Botones';
import {plates} from './plates.json';


class App extends Component {
  constructor(){
    super();
    this.state={
      plates:plates,
      toShow:[],
    
    }
    this.showMe= this.showMe.bind(this);
  }
searchData= (termino)=> {
    this.setState({
      ...this.state,
      termino: termino,
    })
  }


  
  showMe(e){
    console.log(e.currentTarget);   
    this.setState({
      ...this.state,
      toShow: this.state.plates.filter((plates,i)=>{return plates.type==e.currentTarget.id}).map((plates, i)=>{
        return(
          <button type="button" className="btn btn-lg btn-warning active">{plates.name}<br/>{plates.cost}</button>
        )
      })
    })
  }  

  
  render() {
    return (
      <div className="app container">
        <div className= "jumbotron">
        <p className="lead text-center">BurguerQueen</p>
          <Nombre
          searchData={this.searchData} 
          />
           </div>
          <div>
          <div className= "row">
           <div className= "col-md-3">
          <button  id="desayuno" type="button" className="btn  btn-primary active" onClick={this.showMe}>Desayuno</button></div>
          <button id="AlmuerzoyCena" type="button" className="btn btn-primary active" onClick={this.showMe}>Almuerzo y Cena</button>
          <div className= "col-md-12"></div>
              <br></br>{this.state.toShow} 
              </div>
              <div>
            </div>
          </div>
        {this.state.termino}
      </div>
    );
  }
}

export default App;










