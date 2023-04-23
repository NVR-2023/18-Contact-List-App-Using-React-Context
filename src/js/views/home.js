// Initialize dependencies
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "../component/card";
import "../../styles/home.css";

// Home component
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row g-0 px-3">
        <div className="addContact d-flex justify-content-end py-3">
          <Link to="/addContact">
            <button type="button" className="y-3 btn btn-success">Add New Contact</button>
          </Link>
        </div>
        <div className="card">
          <ul className="list-group list-group-flush">
            {store.contacts && store.contacts.map((element) => {
              return (
                <li className="list-group-item" key={element.id}>
                  <Card
                    index={element.id}
                    full_name={element.full_name}
                    address={element.address}
                    phone={element.phone}
                    email={element.email}
                  />
                </li>
              )
            })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
