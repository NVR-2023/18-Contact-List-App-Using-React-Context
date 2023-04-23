import { json } from "react-router";

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
