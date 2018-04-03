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








const reducer = (state, action) => {
    switch (action.type) {
    	case 'addPlayer': return addPlayer(state, action);
        default: return state;
    }
}
	
export default reducer;