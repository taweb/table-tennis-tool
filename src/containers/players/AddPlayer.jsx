import AddPlayer from '../../components/players/AddPlayer';
import { connect } from 'react-redux';
import { addPlayer } from '../../data/actions/state';

const mapDispatchToProps = dispatch => {
	return {
		submitPlayer: data => dispatch(addPlayer(data))
	}
}

export default connect(null, mapDispatchToProps)(AddPlayer);