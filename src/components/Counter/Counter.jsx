import React, { useEffect, useState } from 'react';

// const android = 0
// const iphone = 0

const COUNTER_KEY = 'counter';

const getLocalData = () => {
  console.log('getLocalData');
  return JSON.parse(localStorage.getItem(COUNTER_KEY));
};

// [1, '']

// initialRender
// rerender
// if (typeof initialState === 'func') initialState()

const callbackAndroid = () => getLocalData()?.android ?? 0;
const callbackIphone = () => getLocalData()?.iphone ?? 0;

export const Counter = () => {
  const [android, setAndroid] = useState(callbackAndroid);
  const [iphone, setIphone] = useState(callbackIphone);
  // const [values, setValues] = useState([...Array(5)]);
  // const divRef = useRef(null);

  // useEffect(() => {
  //   divRef.current.lastChild.scrollIntoView({behavior: 'smooth'});
  // }, [values]);

  useEffect(() => {
    localStorage.setItem(COUNTER_KEY, JSON.stringify({ android, iphone }));
  }, [android, iphone]);

  const stateMap = {
    android: setAndroid,
    iphone: setIphone,
  };

  const handleUpdate = (event) => {
    const { name } = event.target;
    stateMap[name]((prev) => prev + 1); // stateMap.android()

    // switch (name) {
    //   case 'android':
    //     setAndroid((prev) => prev + 1);
    //     break;
    //   case 'iphone':
    //     setIphone((prev) => prev + 1);
    //     break;
    //   default:
    //     throw new Error();
    // }
  };

  // const handleChangeAndroid = () => {
  //   setAndroid(prev => prev + 1)
  // }

  // const handleChangeIphone = () => {
  //   setIphone(prev => prev + 1)
  // }

  return (
    <div className='mb-5 p-5 text-white bg-dark rounded-3'>
      <p className='text-center my-5' style={{ fontSize: 80 }}>
        Android: {android}
      </p>
      <p className='text-center my-5' style={{ fontSize: 80 }}>
        iPhone: {iphone}
      </p>

      {/* <div ref={divRef}>
        {values.map((_, index) => (
          <p key={index} className='text-center my-5' style={{ fontSize: 40 }}>
            {index}
          </p>
        ))}
      </div>
      <button
        type='button'
        className='btn p-3 btn-outline-light w-25 mx-2'
        onClick={() => setValues((prev) => [...prev, ...[...Array(5)]])}
      >
        Load More
      </button> */}

      <div className='d-flex align-items-center justify-content-center w-100'>
        <button
          type='button'
          name='android'
          className='btn p-3 btn-outline-light w-25 mx-2'
          onClick={handleUpdate}
        >
          Android
        </button>
        <button
          type='button'
          name='iphone'
          className='btn p-3 btn-outline-light w-25 mx-2'
          onClick={handleUpdate}
        >
          iPhone
        </button>
      </div>
    </div>
  );
};


// import { Component } from 'react';

// export class Counter extends Component {
//   state = {
//     android: 0,
//     iphone: 0,
//   };

//   handleUpdate = event => {
//     const { name } = event.target;
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   render() {
//     const { android, iphone } = this.state;

//     return (
// <div className="mb-5 p-5 text-white bg-dark rounded-3">
//   <p className="text-center my-5" style={{ fontSize: 80 }}>
//     Android: {android}
//   </p>
//   <p className="text-center my-5" style={{ fontSize: 80 }}>
//     iPhone: {iphone}
//   </p>

//   <div className="d-flex align-items-center justify-content-center w-100">
//     <button
//       type="button"
//       name="android"
//       className="btn p-3 btn-outline-light w-25 mx-2"
//       onClick={this.handleUpdate}
//     >
//       Android
//     </button>
//     <button
//       type="button"
//       name="iphone"
//       className="btn p-3 btn-outline-light w-25 mx-2"
//       onClick={this.handleUpdate}
//     >
//       iPhone
//     </button>
//   </div>
// </div>
//     );
//   }
// }
