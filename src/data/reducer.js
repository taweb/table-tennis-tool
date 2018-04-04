let nextId = 2

const addPlayer = (state, { player }) => {
	let players = state.players.slice();
	let entry = {
		id: nextId,
		name: player.name
	}
	players.unshift(entry);
	nextId++;
	return {
		players: players
	}
}

const editPlayer = (state, { player }) => {
	let players = state.players.slice();
	players.map(item => item.id===player.id ? item.name = player.name : item.name)
	return {
		players: players,
		...state
	}
}

const deletePlayer = (state, { player }) => {
	let players = state.players.slice();
	return {
		players: players.filter(item => item.id !== player.id)
	} 
}

const generateTournament = (state, action) => {
	// console.log("hello");
	
	let playerNames = state.players.map(player => player.name);
	let structureArr = [];
	let num = playerNames.length;

	while(num >= 2) {
		structureArr.push(num)
		num = Math.ceil(num / 2);
	}

	console.log(structureArr);

// 	let calcstructure = arr => {
// 	let newarr = [];
// 	let num = arr.length;

// 	while(num >= 2) {
// 		newarr.push(num)

// 		num = Math.ceil(num / 2);
// 	}

// 	return newarr;
// }

	return {
		...state
	}
}

const reducer = (state, action) => {
    switch (action.type) {
    	case 'addPlayer': return addPlayer(state, action);
    	case 'editPlayer': return editPlayer(state, action);
    	case 'deletePlayer': return deletePlayer(state, action);
    	case 'generateTournament': return generateTournament(state, action);
        default: return state;
    }
}
	
export default reducer;