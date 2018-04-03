import { connect } from "react-redux";
import CollectPlayers from '../../components/players/CollectPlayers';


const mapStateToProps = state => {
	return {
		players: state.players,
	} 
}

export default connect(mapStateToProps)(CollectPlayers);
