import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <div className="d-flex underline">
          <i className="bi bi-envelope mt-1 px-1"></i>
          <h6 className="mb-0 text-dark fw-bold ms-2 mt-2">SUBSCRIBE</h6>
        </div>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Newsletter</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center gap-2">
          <p className="mt-1">
            Register now to get latest updates on promotions & coupons.
          </p>
          <div className="header-newsletter bg-secondary d-flex justify-content-center align-items-center mt-1">
            <i className="bi bi-envelope me-3"></i>
            <input
              type="text"
              className="bg-secondary border-0
              "
              placeholder="Enter you email"
              name=""
              id=""
            />
            <span className="border bg-white p-2 ms-3 rounded-circle">
              <i className="bi bi-send-arrow-down text-primary"></i>
            </span>
          </div>
          <span className="fst-italic d-flex justify-content-center">
            By subscribing, you accepted our
            <a className="nav-link mb-2 p-0" href="#">
              <span className="border-bottom fst-normal ms-1 text-primary">
                Policy
              </span>
            </a>
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// <div className="subscribe border-bottom border-1 border-black">
//
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h1 className="modal-title fs-5" id="exampleModalLabel">
//             Newsletter
//           </h1>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="modal"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="modal-body">
//
//         </div>
//         <div className="modal-footer">
//           <button
//             type="button"
//             className="btn btn-secondary"
//             data-bs-dismiss="modal"
//           >
//             Close
//           </button>
//           <button type="button" className="btn btn-primary">
//             Save changes
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
