
export const addPlayer = player => {
	return {
		type: 'addPlayer',
		player: player 
	}
}

export const editPlayer = player => {
	return {
		type: 'editPlayer',
		player: player
	}
}

export const deletePlayer = player => {
	return {
		type: 'deletePlayer',
		player: player
	}
}

export const generateTournament = () => {
	return {
		type: 'generateTournament'
	}
}