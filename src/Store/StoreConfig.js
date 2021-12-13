import { createStore, persist } from "easy-peasy";
import { store2 } from "./StoreData";

export const store = createStore(persist(store2));

export default store;