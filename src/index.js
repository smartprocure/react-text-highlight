import './index.css';

import React from 'react';

class TextHighlight extends React.Component {

  componentDidMount() {
    this.updateDOM();
  }

  componentDidUpdate() {
    this.updateDOM();
  }

  updateDOM() {
    this.text.innerHTML = this.mark(
      this.props.highlight,
      this.props.text,
      this.props.markTag,
      this.props.caseSensitive
    );
  }

  mark(val, str, markTag, caseSensitive) {
    val = (Array.isArray(val) && val) || [val]

    var words = val.map((word) => word.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&'));
    var tagStr = `<{tag} class=${this.props.className}>$&</{tag}>`;

    markTag = markTag || 'mark';

    if (val.length === 0) {
      return str;
    }

    return words.reduce((str, word) => str.replace(RegExp(word, caseSensitive ? 'g':'gi'), tagStr.replace(/{tag}/gi, markTag)), str);
  }

  render() {
    return (
      <span className="TextHighlight" ref={ el => this.text = el }></span>
    );
  }
}

TextHighlight.propTypes = {
  highlight: React.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  className: PropTypes.string,
  text: React.PropTypes.string.isRequired,
  markTag: React.PropTypes.string,
  caseSensitive: React.PropTypes.bool
};

TextHighlight.defaultProps = {
  highlight: null,
  text: null,
  markTag: 'mark',
  caseSensitive: false
};
