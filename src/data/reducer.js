let nextId = 4;

const addPlayer = (state, { player }) => {
	let players = state.players.slice();
	// set up new player object to be added to state
	let entry = {
		id: nextId,
		name: player.name
	}
	players.push(entry);
	nextId++;
	return {
		players: players,
	}
}

const editPlayer = (state, { player }) => {
	let players = state.players.slice();
	// map through players, if matching id, update the name
	players.map(item => item.id===player.id ? item.name = player.name : item.name)
	return {
		players: players,
	}
}

const deletePlayer = (state, { player }) => {
	let players = state.players.slice();
	return {
		players: players.filter(item => item.id !== player.id),
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

	// get a random player from the playerEntrants array, push into playersRandom array 
	while (playerCount > 0) {
		let random = Math.floor(Math.random()*playerCount)
		let randomPlayer = playerEntrants.splice(random, 1)[0];
		playersRandom.push(randomPlayer);
		playerCount--;
	}
	// ---------------------------------------------------------------

	
	// ---------------------------------------------------------------
	// creating structure array to help generate redux tournament state
	// length of structure array relates to the number of rounds in tournament
	// the number stored in each array index refers to number of players in that round.

	let structureArr = [];
	let num = playersRandom.length;

	// the first entry in the structure array is the number of players entered by the user
	structureArr.push(num);

	let nextLargestSquare = 0;
	let exp = 0;

	// get the next power of 2 number which is greater than the number of players entered by user
	// eg. if 14 players entered, the while loop will return a result of 16 
	while (nextLargestSquare < num){
		exp++;
		nextLargestSquare = Math.pow(2, exp)
	}

	// second round will always have power2 number of players which is smaller than first round
	let nextSmallestSquare = nextLargestSquare/2;

	// for second round onwards until final, push in decreasing powers of 2 into structure array
	while(nextSmallestSquare >= 2) {
		structureArr.push(nextSmallestSquare);
		nextSmallestSquare = nextSmallestSquare / 2;
	}
	// ---------------------------------------------------------------

	// ---------------------------------------------------------------
	// Creating initial Tournament array, with first round players populated

	let initialTournamentArr = [];

	initialTournamentArr.push(playersRandom);

	// generating nested array of tournament rounds in redux state, with "" initially
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