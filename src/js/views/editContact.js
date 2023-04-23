import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();
    const [editContact, setEditContact] = useState({});

    useEffect(() => {
        fetchExistingContact();
    }, [])

    // fetch existing contact
    const fetchExistingContact = async () => {
        try {
            const response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + params.theid);
            const data = await response.json();
            if (response.ok) {
                setEditContact(data);
            }
        } catch (error) {
            console.error("Data failed to upload" + error);
        }
    };

    // Updates existing contact
    const updateContact = async () => {
        try {
            const response = await fetch("https://assets.breatheco.de/apis/fake/contact/" + params.theid, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(editContact)
            });
            if (response.ok) {
                await actions.getAllContacts();
                navigate("/");
            }
        }
        catch (error) { console.error("Data failed to uplaod" + error); }
    };


    return (
        <div className="container-fludi">
            <p>id to be edited {params.theid}</p>
            <div className="row mx-3">
                <div className="my-3 text-end">
                    <Link to="/">
                        <button type="button" className="y-3 btn btn-success">Reurn Home</button>
                    </Link>
                </div>
                <div>
                    <div className="mb-3">
                        <label htmlFor="full_name" className="form-label">
                            Full Name
                        </label>
                        <input
                            value={editContact.full_name}
                            onChange={(event) => setEditContact({ ...editContact, full_name: event.target.value })}
                            type="text"
                            className="form-control"
                            id="full_name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                            Address
                        </label>
                        <input
                            value={editContact.address}
                            onChange={(event) => setEditContact({ ...editContact, address: event.target.value })}
                            type="text"
                            className="form-control"
                            id="address"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Phone
                        </label>
                        <input
                            value={editContact.phone}
                            onChange={(event) => setEditContact({ ...editContact, phone: event.target.value })}
                            type="text"
                            className="form-control"
                            id="phone"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            value={editContact.email}
                            onChange={(event) => setEditContact({ ...editContact, email: event.target.value })}
                            type="email"
                            className="form-control"
                            id="email"
                        />
                    </div>
                    <button className="btn btn-primary col-12"
                        onClick={() => updateContact()}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};
