import { connect } from "react-redux";
import ShowTournament from '../../components/tournament/ShowTournament';
import { generateTournament } from '../../data/actions/state'; 


const mapStateToProps = state => { 
	return {
		rounds: state.rounds,
	} 
}

const mapDispatchToProps = dispatch => {
	return {
		genTournament: () => dispatch(generateTournament()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTournament);