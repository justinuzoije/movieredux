import React from "react";

export default class MovieWidget extends React.Component {
  render() {

    return (

      <div>
        <input type="text" value={this.props.name}
        onChange={event => this.props.changeName(event.target.value)}/>
        <button onClick={() => this.props.getMovie(this.props.name)}>Click Here</button>
      </div>
    );
  }
}
