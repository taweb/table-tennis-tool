import { connect } from "react-redux";
import CollectPlayers from "../../components/players/CollectPlayers";
import { generateTournament } from "../../data/actions/state"; 

const mapStateToProps = state => { 
	return {
		players: state.players,
	} 
}

const mapDispatchToProps = dispatch => {
	return {
		genTournament: () => dispatch(generateTournament()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectPlayers);
