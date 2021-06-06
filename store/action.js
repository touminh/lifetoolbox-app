export function userToken(userToken){
    return{
        type:'SET_TOKEN',
        userToken
    }
}
export function userData(userData){
    return{
        type:'SET_USER_DATA',
        userData
    }
}
export function screenLoading(value){
    return{
        type:'SET_LOADING',
        value
    }
}