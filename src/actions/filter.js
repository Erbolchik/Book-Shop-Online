export const setFilter = filter=>({
    type:'SET-FILTER',
    payload:filter
})

export const setSearchQuery = value=>({
    type:'SET-QUERY',
    payload:value
})