let nextId = 2

const addPlayer = (state, { player }) => {
	let players = state.players.slice();
	let entry = {
		id: nextId,
		name: player.name
	}
	players.push(entry);
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
	
	let playerEntrants = state.players.map(player => player.name);

	let playersRandom = [];
	let playerCount = playerEntrants.length;

	while (playerCount > 0) {
		let random = Math.floor(Math.random()*playerCount)
		let randomPlayer = playerEntrants.splice(random, 1)[0];
		playersRandom.push(randomPlayer);
		playerCount--;
	}


	let structureArr = [];
	let num = playersRandom.length;

	while(num >= 2) {
		structureArr.push(num)
		num = Math.ceil(num / 2);
	}

	// console.log(structureArr);

	let firstArr = [];

	firstArr.push(playersRandom);

	for(let i=1; i < structureArr.length; i++){
		let roundArr = [];
		for(let j=0; j<structureArr[i]; j++){
			roundArr.push("");
		}
		firstArr.push(roundArr);
	}

	return {
		...state,
		rounds: firstArr
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