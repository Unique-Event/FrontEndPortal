import { action } from "easy-peasy";

export const store2 = {
    FirstName:'',
    LastName:'',
    CompanyName:'',
    Job:'',
    Email:'',
     
    setFirstName:action((state, payload) => {
        state.Name = payload;
      }),
    setLastName:action((state, payload) => {
        state.Live = payload;
    }),
    setCompanyName:action((state, payload) => {
        state.Chose = payload;
    }),  
    setJob:action((state, payload) => {
        state.Chose2 = payload;
    }),
    setEmail:action((state, payload) => {
        state.ChoseOther = payload;
    }),
    
}

export default store2;