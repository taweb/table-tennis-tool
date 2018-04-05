import { connect } from "react-redux";
import ShowTournament from '../../components/tournament/ShowTournament';

const mapStateToProps = state => { 
	return {
		rounds: state.rounds,
	} 
}

export default connect(mapStateToProps)(ShowTournament);