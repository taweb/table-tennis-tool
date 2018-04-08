// set id incrementer to assign player id to
let nextId = 0;

// add the newly submitted player to players array
const addPlayer = (state, { player }) => {
	// get copy of current player array
	let players = state.players.slice();
	// set up new player object to be added to array
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

// edit name of existing player
const editPlayer = (state, { player }) => {
	// get copy of current player array
	let players = state.players.slice();
	// map through players array to find the matching player id - edit the name associated with that record
	players.map(item => item.id===player.id ? item.name = player.name : item.name)
	return {
		players: players,
	}
}

// delete a previously added player
const deletePlayer = (state, { player }) => {
	// get copy of current player array
	let players = state.players.slice();
	// filter array to return all players except the one matching the id passed into reducer
	return {
		players: players.filter(item => item.id !== player.id),
	} 
}

// create rounds key in redux state containing an array representing tournament structure generated from the input names
const generateTournament = (state, action) => {
	// collect array of submitted player name inputs
	let playerEntrants = state.players.map(player => player.name);

	// ---------------------------------------------------------------
	// creating new array of entrants in a random order
	
	let playersRandom = [];
	let playerCount = playerEntrants.length;
	// get a random player from the playerEntrants array, push into playersRandom array 
	while (playerCount > 0) {
		let random = Math.floor(Math.random()*playerCount)
		let player = playerEntrants.splice(random, 1)[0];
		playersRandom.push(player);
		playerCount--;
	}
	// ---------------------------------------------------------------
	
	// ---------------------------------------------------------------
	// creating structure array to help generate tournament state
	// length of structure array relates to the number of rounds in tournament
	// the number stored in each array item refers to the number of players in that round.
	
	let structureArr = [];
	let num = playersRandom.length;
	// the first entry in the structure array is always the number of players entered by the user initially
	structureArr.push(num);

	let nextLargestSquare = 0;
	let exp = 0;
	// get the next power of 2 number which is greater than the number of players entered by user
	// eg. if 14 players entered, the while loop will return a result of 16 
	while (nextLargestSquare < num){
		exp++;
		nextLargestSquare = Math.pow(2, exp)
	}
	// second round will always have a power2 number of players which is smaller than first round
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
	// first entry into initialTournamentArr the randomised array of initial players 
	initialTournamentArr.push(playersRandom);
	// generate nested arrays of tournament rounds, with "" as name value initially (players for later rounds not known)
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