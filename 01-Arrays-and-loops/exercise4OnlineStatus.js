// Online status

/**
Display online status for a list of users.

Example:
- `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 */

const onlineStatus = listUsers => {
    switch(listUsers.length){
        case 0:
            return "No users online";
        case 1:
            return `${listUsers[0]} online`;
        case 2:
            return `${listUsers[0]}, ${listUsers[1]} online`;
        default:
            return  `${listUsers[0]}, ${listUsers[1]} and ${listUsers.length - 2} more online`;  
    }
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));