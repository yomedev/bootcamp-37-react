import React, { useEffect, useRef, useState } from 'react';

const ONE_SECOND = 1000;

const formatTime = (time) => {
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
};

export const TimerModal = () => {
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef(null);

  useEffect(() => {
    // return handleStopInterval
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [handleStopInterval]); // {} === {} => false

  const handleStartInterval = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime(new Date());
        console.log(new Date());
      }, ONE_SECOND);
    }
  };

  const handleStopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5'>
      <h2 className='h1 m-5'>{formatTime(time)}</h2>
      <div className='d-flex align-items-center justify-content-center w-100'>
        <button
          onClick={handleStartInterval}
          type='button'
          className='btn p-3 btn-outline-light w-25 mx-2'
        >
          Start
        </button>
        <button
          onClick={handleStopInterval}
          type='button'
          className='btn p-3 btn-outline-light w-25 mx-2'
        >
          Stop
        </button>
      </div>
    </div>
  );
};

// export class TimerModal extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState({ time: new Date() });
//       console.log(new Date());
//     }, ONE_SECOND);
//   }

//   componentWillUnmount() {
//     if (this.intervalId) {
//       clearInterval(this.intervalId);
//     }
//   }

//   formatTime() {
//     const { time } = this.state;

//     const hours = String(time.getHours()).padStart(2, '0');
//     const minutes = String(time.getMinutes()).padStart(2, '0');
//     const seconds = String(time.getSeconds()).padStart(2, '0');

//     return `${hours}:${minutes}:${seconds}`;
//   }

//   render() {
//     return (
//       <div className='d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5'>
//         <h2 className='h1 m-5'>{this.formatTime()}</h2>
//         <div className='d-flex align-items-center justify-content-center w-100'>
//           <button type='button' className='btn p-3 btn-outline-light w-25 mx-2'>
//             Start
//           </button>
//           <button type='button' className='btn p-3 btn-outline-light w-25 mx-2'>
//             Stop
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
