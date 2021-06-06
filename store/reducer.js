const initialState={
    userToken:null,
    userData:null,
    screenLoading:false
}
export default function reducers(state=initialState,action={}){
    switch(action.type){
        case 'SET_TOKEN':
            return{
                ...state,
                userToken:action.userToken,
            };
        case 'SET_USER_DATA':
            return{
                ...state,
                userData:action.userdata
            };
        case 'SET_LOADING':
            return{
                ...state,
                screenLoading:action.screenLoading
            }
        default:
            return state
    }
}