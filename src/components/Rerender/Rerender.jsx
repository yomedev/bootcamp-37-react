/*eslint-disable*/
import { Component, PureComponent, useState } from 'react';

const Button = ({label, onClick}) => {
  console.log('Button');
  return (
    <button className='btn btn-outline-light' type='button' onClick={onClick}>
      {label}
    </button>
  );
}

// class Button extends PureComponent {

//   // shouldComponentUpdate(nextProps) {
//   //   if (this.props.label !== nextProps.label) {
//   //     return true
//   //   }
//   //   return false
//   // }

//   render() {
//     const { label, onClick } = this.props;
//     console.log('Button');

//     return (
//       <button className='btn btn-outline-light' type='button' onClick={onClick}>
//         {label}
//       </button>
//     );
//   }
// }


export const Rerender = () => {
  const [counter, setCounter] = useState(0)

  const handleCount = () => {
    setCounter(prev => prev + 1)
  };
  console.log('Rerender');
  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5'>
      <h2>{counter}</h2>

      <Button label={'Click me!'} onClick={handleCount} />
    </div>
  );
}


// export class Rerender extends Component {
//   state = {
//     counter: 0,
//     label: 'Click me!'
//   };

//   handleCount = () => {
//     this.setState((prevState) => ({ counter: prevState.counter + 1 }), () => {
//       if (this.state.counter !== 0 && this.state.counter % 2 === 0) {
//         this.setState(prevState => ({label: prevState.label.concat(this.state.counter)}))
//       }
//     });
//   };

//   render() {
//     const { counter, label } = this.state;
//     console.log('Rerender');

//     return (
//       <div className='d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5'>
//         <h2>{counter}</h2>

//         <Button label={label} onClick={this.handleCount} />
//       </div>
//     );
//   }
// }
