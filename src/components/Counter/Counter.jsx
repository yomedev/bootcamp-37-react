import { Component } from "react";



export class Counter extends Component {

  state = {
    counter: this.props.defaultValue ?? 0,
    minus: 0,
    plus: 0,
  }
  
  handleMinus = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1, minus: prevState.minus + 1}))
  }

  handlePlus = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1, plus: prevState.plus + 1}))
  }

  handleUpdate = (event) => {
    const {name} = event.target
    this.setState((prevState) => ({ [name]: prevState[name] + 1}))
    // switch (name) {
    //   case 'minus': 
    //   this.setState((prevState) => ({ counter: prevState.counter - 1, minus: prevState.minus + 1}))
    //   break
    //   case 'plus': 
    //   this.setState((prevState) => ({ counter: prevState.counter + 1, plus: prevState.plus + 1}))
    //   break
    //   default: 
    //   throw new Error('Something went wrong!')
    // }
  }

  render() {
    const {counter, plus, minus} = this.state
    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
       <h2 className="text-center">Counter</h2>
       <p className="text-center my-5" style={{ fontSize: 80 }}>
         {counter}
       </p>
       <p className="text-center my-5" style={{ fontSize: 80 }}>
         Plus: {plus}
       </p>
       <p className="text-center my-5" style={{ fontSize: 80 }}>
         Minus: {minus}
       </p>

       <div className="d-flex align-items-center justify-content-center w-100">

         <button className="btn p-3 btn-outline-light w-25 mx-2" name="minus" type="button" onClick={this.handleMinus}>
           Minus
         </button>
         <button className="btn p-3 btn-outline-light w-25 mx-2" name="plus" type="button" onClick={this.handleUpdate}>
           Plus
         </button>
       </div>
     </div>
    )
  }
}


// export const Counter = ({defaultValue = 0}) => {
//   return (
//     <div className="mb-5 p-5 text-white bg-dark rounded-3">
//       <h2 className="text-center">Counter</h2>
//       <p className="text-center my-5" style={{ fontSize: 80 }}>
//         0
//       </p>

//       <div className="d-flex align-items-center justify-content-center w-100">

//         <button className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//           Minus
//         </button>
//         <button className="btn p-3 btn-outline-light w-25 mx-2" type="button">
//           Plus
//         </button>
//       </div>
//     </div>
//   );
// };