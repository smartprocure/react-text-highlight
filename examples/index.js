import React from 'react';
import TextHighlight from 'react-text-highlight';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {inputValue: null};
  }

  componentDidMount() {
    var input = React.findDOMNode(this.refs.input);
    input.focus();
  }

  onInputChange(e) {
    this.setState({inputValue: e.target.value});
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onInputChange.bind(this)}
          ref="input"
        />
        <p>
          <TextHighlight
            highlight={this.state.inputValue}
            text="A long time ago, in a galaxy far, far away...."
          />
        </p>
      </div>
    );
  }
}

React.render(
  <App />,
  document.getElementById('container')
);