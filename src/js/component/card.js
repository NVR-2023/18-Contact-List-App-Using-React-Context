import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"


const Card = ({ index, photo, full_name, address, phone, email }) => {
  const { store , actions } = useContext(Context);

  // Subfucntion to delete contact with given id
  const deleteContact = async () => {
    try {
      const response = await fetch(
        "https://assets.breatheco.de/apis/fake/contact/" + index,
        {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        }
      );
      if (response.ok) {
        await actions.getAllContacts();
      }
    } catch (error) {
      console.error("Data failed to uplaod" + error);
    }
  };

  // Card Component body
  if (!photo) {
    photo =
      "data:image/jpeg;base64,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";
  }
  const label1 = "staticBackdrop" + index;
  const label2 = "staticBackdropLabel" + index;
  return (
    <div className="contact-Card d-flex justify-content-between p-3">
      <div className="d-flex">
        <div className="col-sm-4 col-md-2 contact-photo ratio ratio-1x1 me-3">
          <img src={photo} className="img-fluid"></img>
        </div>
        <div className="col-sm-7 col-md-8 contact-info ps-3">
          <div className="full-name">{full_name}</div>
          <div className="address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>{" "}
            {address}
          </div>
          <div className="phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>{" "}
            {phone}
          </div>
          <div className="email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-envelope-open-fill me-1"
              viewBox="0 0 16 16"
            >
              <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z" />
            </svg>{" "}
            {email}
          </div>
        </div>
      </div>
      <div className="col-sm-1 col-md-2 text-end icons">
        <Link to={"/editContact/" + index}>
            <span className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
              </svg>
            </span>
        </Link>
        <span className="px-2">
          <button
            className="button-hidden"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#" + label1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </button>
          <div
            className="modal fade"
            id={label1}
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby={label2}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={label2}>
                    Delete Contact
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">Delete contact wih id: {index}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={async (event) => {
                      await deleteContact();
                      event.target.setAttribute("data-bs-dismiss" , "modal")
                    }}
                    data-bs-dismiss="modal"
                  >
                    Yes, delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Card;
