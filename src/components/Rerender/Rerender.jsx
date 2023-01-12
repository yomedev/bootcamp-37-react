import { memo, useCallback, useState } from 'react';

const Button = memo(
  ({ label, onClick, object }) => {
    console.log('Button');
    console.log(object);
    return (
      <button className='btn btn-outline-light' type='button' onClick={onClick}>
        {label}
      </button>
    );
  },
  (prevProps, nextProps) => prevProps.object.test === nextProps.object.test,
);

Button.displayName = 'Button';

export const Rerender = () => {
  const [counter, setCounter] = useState(0);

  const handleCount = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, [setCounter]);

  console.log('Rerender');
  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5'>
      <h2>{counter}</h2>
      {/* <button className='btn btn-outline-light' type='button' onClick={handleCount}>
        Inner button
      </button> */}
      <Button label={'Click me!'} object={{ test: 'test' }} onClick={handleCount} />
    </div>
  );
};

// class Button extends PureComponent {
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
