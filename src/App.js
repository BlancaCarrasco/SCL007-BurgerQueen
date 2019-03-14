import React, { Component } from 'react';
import Nombre from './Componentes/Nombre';
import Botones from './Componentes/Botones';

class App extends Component {
  state={
    termino:"cafe"
  }
  searchData= (termino)=> {
    this.setState({
      ...this.state,
      termino: termino,
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
          <Botones
          searchData={this.searchData}
          />
          
        
        {this.state.termino}
      </div>
    );
  }
}

export default App;










// class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       queHacer: null,
//       item:[]
//     }

//   }

  // handleInputChange(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
  
  //   this.setState({
  //     [name]: value,
  //   });
  // }
// class App extends Component {
//     state={
//       termino:"cafe"
//     }
//     nameData= (termino)=> {
//       this.setState({
//         termino
//       })
//     }
//     render() {
//       return (
//         <div className="app container">
//           <div className= "jumbotron">
//           <p className="lead text-center">Buscador de Imagenes</p>
//           <Nombre />
//           // nameData={this.nameData}/>
//           // </div>
//           // <h1>hola</h1>
//           // {this.state.termino}
//         </div>
//       );
//     }
//   }
  
// //   render() {
// //     return (
// //       <div className="app container">
// //         {/* <div className= "jumbotron"> */}
// //         <p className="lead text-center">BurguerQueen</p><hr/>
// //         <div>
// //         {/* <p className="lead text-center">Buscador de Imagenes</p> */}
// //           <nombre 
// //           nameData={this.nameData} />
// //             <div className= "row">
// //             <input ref={this.nameRef} type="text" className="form-control form-control-lg" placeholder="busca tu imagen. Ejemplo: futbol"/>
// //             <div className= "form-group col-md-4">
// //               <input type="submit" className="btn btn-lg btn-danger btn-block" value= "ok"/>
// //             </div>

// //               {/* <button onClick={this.Desayunos}>Desayunos</button>
// //               <button onClick={this.Almuerzo}>Almuerzo y Cena</button>
// //               <button onClick={this.Desayunos}>Cafe americano 500$</button>
// //               <button onClick={this.Almuerzo}>Cafe con leche 700$</button>
// //               <button onClick={this.Desayunos}>Sandwich de jamón y queso 1000$</button>
// //               <button onClick={this.Almuerzo}>Jugo natural 700$</button> */}
// //             </div>    
// //         </div>
// //         {this.state.termino}
// //       </div>  
// //     );
// //   }
// // }


// export default App;
