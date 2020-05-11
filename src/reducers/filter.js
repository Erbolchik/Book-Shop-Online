const initialState = {
    searchQuery: '',
    filterBy: 'all'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET-FILTER':
            return {
                ...state,
                filterBy: action.payload
            }
        case 'SET-QUERY':
            return {
                ...state,
                searchQuery: action.payload
            }
        default:
            return state
    }
}