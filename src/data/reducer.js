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
		...this.state
	}
}

const deletePlayer = (state, { player }) => {
	let players = state.players.slice();
	return {
		players: players.filter(item => item.id !== player.id)
	} 
}

const reducer = (state, action) => {
    switch (action.type) {
    	case 'addPlayer': return addPlayer(state, action);
    	case 'editPlayer': return editPlayer(state, action);
    	case 'deletePlayer': return deletePlayer(state, action);
        default: return state;
    }
}
	
export default reducer;