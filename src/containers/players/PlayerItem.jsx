import PlayerItem from "../../components/players/PlayerItem";
import { connect } from "react-redux";
import { editPlayer } from "../../data/actions/state";
import { deletePlayer } from "../../data/actions/state";

const mapDispatchToProps = dispatch => {
	return {
		editPlayer: data => dispatch(editPlayer(data)),
		deletePlayer: data => dispatch(deletePlayer(data))
	}
}

export default connect(null, mapDispatchToProps)(PlayerItem);
