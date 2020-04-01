import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from "redux-logger";
import rootReducer from './reducers';
import {composeWithDevTools} from "redux-devtools-extension";

export const initStore = (initialState = {}) => {
    initialState = {
        catalog : [
            {
                id: 1,
                title: "Canon iR 2006N DADF",
                image: "https://www.fotocopy.co.id/content/uploads/canon-ir-2006n-dadf-WiFi.jpeg",
                description: "Mesin Fotocopy Canon iR 2006N DADF Baru, Harga Termurah se Indonesia",
                category: "baru",
                price: 21000000
            },
            {
                id: 2,
                title: "Canon iR 2520",
                image: "https://www.fotocopy.co.id/content/uploads/canon-ir-2520.jpeg",
                description: "Mesin Fotocopy Canon iR 2520 Baru, Harga Termurah se Indonesia",
                category: "baru",
                price: 24000000
            },
            {
                id: 3,
                title: "Canon iR C3020",
                image: "https://www.fotocopy.co.id/content/uploads/canon-ir-c3020.jpeg",
                description: "Mesin Fotocopy Canon iR C3020 Warna Baru, Harga Termurah se Indonesia",
                category: "baru",
                price: 51000000
            },
            {
                id: 4,
                title: "Canon iR 3045",
                image: "https://www.fotocopy.co.id/content/uploads/canon-ir-3045.jpeg",
                description: "Mesin Fotocopy Canon iR 3045 Rekondisi, Harga Termurah se Indonesia",
                category: "rekondisi",
                price: 14000000
            },
            {
                id: 5,
                title: "Canon iR 3235",
                image: "https://www.fotocopy.co.id/content/uploads/canon-ir-3235.jpeg",
                description: "Mesin Fotocopy Canon iR 3235 Rekondisi, Harga Termurah se Indonesia",
                category: "rekondisi",
                price: 16000000
            },
            {
                id: 6,
                title: "Canon iRA 6065",
                image: "https://www.fotocopy.co.id/content/uploads/canon-ira-6055.jpeg",
                description: "Mesin Fotocopy Canon iRA 6065 Rekondisi, Harga Termurah se Indonesia",
                category: "rekondisi",
                price: 30000000
            }
        ], cart: [], wishlist: [], catalogFilter: "all"};

    const middlewares = applyMiddleware(thunk, reduxLogger);
    return createStore(rootReducer, initialState, composeWithDevTools(middlewares));
}