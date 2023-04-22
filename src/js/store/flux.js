import { json } from "react-router";

const contatcObject1 = {
	id: 1,
	full_name: "Alvin McEnroe",
	address: "Saint Bernard Av, 20000, Palo Alto",
	phone: "555909888778",
	email: "john@gmail.com",

}

const contatcObject2 = {
	id: 2,
	full_name: "Alvin DosSantos",
	address: "59 Crosroadd, Palm Beach, California",
	phone: "0008886765612",
	email: "dossantos@gmail.com",

}

const contatcObject3 = {
	id: 3,
	full_name: "Peter Redux",
	address: "20000 Rodeo Drive, flat 9B, Albuquerque",
	phone: "555909888778",
	email: "john@gmail.com",

}

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			contacts: [],

		},
		actions: {

			getAllContacts: async () => {
				try {
					const response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/nunoben");
					const data = await response.json();
					setStore({ contacts: data });
				}
				catch (error) {
					console.error("Data failed to load:" + error);
				}
			},

		}
	};
};

export default getState;
