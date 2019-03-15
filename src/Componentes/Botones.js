import React, { Component } from 'react';

class Boton extends Component{
  render() {
    return( 
      <form onSubmit={this.handleData}>
          <div className= "row">
          <div className= "form-group col-md-3">
              <input type="submit" className="btn btn-lg btn-success " onClick={this.showMe} value= "desayuno"/>
            </div>
            <div className= "form-group col-md-3">
              <input type="submit" className="btn btn-lg btn-primary " onClick={this.showMe} value= "Almuerzo y cena"/>
            </div>
            <div className= "form-group col-md-6"></div>
            <div className= "form-group col-md-3">
              <input type="submit" className="btn btn-lg btn-success " value= "Cafe americano 500$"/> 
            </div>
            <div className= "form-group col-md-3">
              <input type="submit" className="btn btn-lg btn-success " value= "Cafe con leche 700$"/>
              <div className= "form-group col-md-6"></div>
              </div> 
              </div>
              <div className= "row">
              <div className= "form-group col-md-3">
              <input type="submit" className="btn btn-lg btn-success " value= "Sandwich de jamón y queso 1000$"/>
              </div>
              <div className= "form-group col-md-1"></div>
              <div className= "form-group col-md-3">
              <input type="submit" className="btn btn-lg btn-success " value= "Jugo natural 700$"/>
              </div>
          </div>
      </form>
    );
  }
}
 export default Boton;

 