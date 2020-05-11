const initialState = {
    isReady: false,
    items: null,
    filterBy: 'all'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET-BOOKS':
            return {
                ...state,
                items: action.payload,
                isReady: true
            }
        case 'SET-FILTER':
            return {
                ...state,
                filterBy:action.payload
            }
        case 'SET-IS-READY':
            return {
                ...state,
                isReady: action.payload
            }
        default:
            return state
    }
}