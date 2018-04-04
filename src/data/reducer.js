let nextId = 4;

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
	
	// collect array of player inputs from user
	let playerEntrants = state.players.map(player => player.name);

	// ---------------------------------------------------------------
	// creating array of entrants in a random order
	
	// create new array to push players into in a random order
	let playersRandom = [];
	let playerCount = playerEntrants.length;

	// while still players left in the original player array, pick a random index number, remove player at that index number, and push into the new array
	while (playerCount > 0) {
		let random = Math.floor(Math.random()*playerCount)
		let randomPlayer = playerEntrants.splice(random, 1)[0];
		playersRandom.push(randomPlayer);
		playerCount--;
	}
	// ---------------------------------------------------------------

	
	// ---------------------------------------------------------------
	// creating structure array to help generate redux tournament state
	// length of structure array relates to the number of rounds in tournament, the number stored in each refers to number of players in that round

	let structureArr = [];
	let num = playersRandom.length;

	// while 2 or more players, push into structure array
	while(num >= 2) {
		structureArr.push(num)
		// reassignment of num after push gets the players in the next tournament round, based on the current round
		num = Math.ceil(num / 2);
	}
	// ---------------------------------------------------------------

	// ---------------------------------------------------------------
	// Creating initial Tournament array, with first round players populated

	let initialTournamentArr = [];

	initialTournamentArr.push(playersRandom);

	for(let i=1; i < structureArr.length; i++){
		let roundArr = [];
		for(let j=0; j<structureArr[i]; j++){
			roundArr.push("");
		}
		initialTournamentArr.push(roundArr);
	}
	// --------------------------------------------------------------

	return {
		...state,
		rounds: initialTournamentArr
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