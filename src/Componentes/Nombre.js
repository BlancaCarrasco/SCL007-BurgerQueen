import React, { Component } from 'react';

class Nombre extends Component{

  nameRef= React.createRef();
  
  handleData= (e)=> {
      e.preventDefault();

      const termino= this.nameRef.current.value;
      this.props.searchData(termino)
  }
  render() {
    return( 
      <form onSubmit={this.handleData}>
          <div className= "row">
            <div className= "form-group col-md-6">
              <input ref={this.nameRef} type="text" className="form-control form-control-md" placeholder="nombre del cliente"/>
            </div>
            <div className= "form-group col-md-2">
              <input type="submit" className="btn btn-md btn-danger btn-block" value= "OK"/>
            </div>
          </div>
      </form>
    );
  }
}
 export default Nombre;
