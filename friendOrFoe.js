function friend(friends) {
	let myFriends = [];
	for (const friend of friends) {
		if (friend.length == 4) {
			myFriends.push(friend);
		}
	}
	return myFriends;
}

friend(["Ryan", "Kieran", "Jason", "Yous"]);

//alternative solution:
//   function friend(friends){
// 	return friends.filter(n => n.length === 4)
//   }
