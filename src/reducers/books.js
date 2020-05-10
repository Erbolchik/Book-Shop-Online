const initialState = {
    isReady:false,
    items: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET-BOOKS':
            return {
                ...state,
                items: action.payload,
                isReady:true
            }
        case 'SET-IS-READY':
            return{
                ...state,
                isReady:action.payload
            }
        default:
            return state
    }
}