import MovieWidget from './MovieWidget';
import { connect } from 'react-redux';

const MovieWidgetContainer = connect(
  state => state
)(MovieWidget)

export default MovieWidgetContainer;
