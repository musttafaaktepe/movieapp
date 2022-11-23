import { LOGIN, REGISTER, LOGOUT} from "../types/reduxTypes"
const initialState = {
    email:"",
    password:"",
    loginInformation:false,
    user:{}
}

const reduxReducer  = (state=initialState, action ) => {
    switch (action.type){
        case LOGIN:
            return {...state, email:action.email, password:action.password, user:action.payload, loginInformation:action.login }
        case REGISTER:
            return {...state, email:action.email, password:action.password, user:action.payload, loginInformation:action.login}
        case LOGOUT:
            return initialState;

        default:
            return state;
    }
}



export default reduxReducer;
