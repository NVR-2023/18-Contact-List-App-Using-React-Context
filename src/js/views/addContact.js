import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [newContact, setNewContact] = useState({
        agenda_slug: "nunoben",
        full_name: "",
        address: "",
        phone: "",
        email: "",
    });

    // Uploads new conattc
    const createNewContact = async () => {
        try {
            const response = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(newContact)
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
                            value={newContact.full_name}
                            onChange={(event) => setNewContact({ ...newContact, full_name: event.target.value })}
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
                            value={newContact.address}
                            onChange={(event) => setNewContact({ ...newContact, address: event.target.value })}
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
                            value={newContact.phone}
                            onChange={(event) => setNewContact({ ...newContact, phone: event.target.value })}
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
                            value={newContact.email}
                            onChange={(event) => setNewContact({ ...newContact, email: event.target.value })}
                            type="email"
                            className="form-control"
                            id="email"
                        />
                    </div>
                    <button className="btn btn-primary col-12"
                        onClick={() => createNewContact()}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};
