import { PropTypes } from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children, onModalClose }) => {

  useEffect(() => {
    const handleKeyClose = (event) => {
      if (event.code === 'Escape') {
        console.log(event.code);
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyClose);

    return () => {
      console.log('remove');
      window.removeEventListener('keydown', handleKeyClose)
    }
  }, [onModalClose]);

  const handleBackdropClose = (event) => {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  };

  return createPortal(
    <>
      <div className='modal-backdrop fade show' />

      <div className='modal fade show' style={{ display: 'block' }} onClick={handleBackdropClose}>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Modal title</h5>
              <button
                type='button'
                className='btn-close'
                aria-label='Close'
                onClick={onModalClose}
              />
            </div>

            <div className='modal-body'>{children}</div>
          </div>
        </div>
      </div>
    </>,
    modalRoot,
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyClose);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyClose)
//   }

//   handleKeyClose = (event) => {
//     if (event.code === 'Escape') {
//       this.props.onModalClose();
//     }
//   }

//   handleBackdropClose = (event) => {
//     if (event.target === event.currentTarget) {
//       this.props.onModalClose();
//     }
//   };

//   render() {
//     const { children, onModalClose } = this.props;
//     return createPortal((
//       <>
//         <div className='modal-backdrop fade show' />

//         <div
//           className='modal fade show'
//           style={{ display: 'block' }}
//           onClick={this.handleBackdropClose}
//         >
//           <div className='modal-dialog modal-dialog-centered'>
//             <div className='modal-content'>
//               <div className='modal-header'>
//                 <h5 className='modal-title'>Modal title</h5>
//                 <button
//                   type='button'
//                   className='btn-close'
//                   aria-label='Close'
//                   onClick={onModalClose}
//                 />
//               </div>

//               <div className='modal-body'>{children}</div>
//             </div>
//           </div>
//         </div>
//       </>
//     ), modalRoot);
//   }
// }

Modal.propType = {
  children: PropTypes.node.isRequired,
};
