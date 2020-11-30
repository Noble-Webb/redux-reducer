export function manageFriends(state = {friends: []}, action){
    switch (action.type){
        case 'ADD_FRIEND':
            return ( {...state, friends: [
                ...state.friends, 
                action.friend
            ]})
        case 'REMOVE_FRIEND':
           const friendToRemove = state.friends.findIndex(friend => friend.id === action.id)
            return({
                // nonmutative
                ...state, 
                friends: [
                    // takes all the friends before the one to remove 
                    ...state.friends.slice(0, friendToRemove),
                    // takes all the friends after the one to remove 
                    ...state.friends.slice(friendToRemove + 1)
                ]
            })
        default: 
            return state;
    }
}
