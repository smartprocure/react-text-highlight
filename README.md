# react-text-highlight

Simple React component for highlight a text.

## Demo

[Demo](http://henriquea.github.io/react-text-highlight)

To run it locally:

```
npm install
npm run examples
open localhost:8080
```

## Install

`npm install --save react-text-highlight`

## Usage

```javascript
import React from 'react';
import TextHighlight from 'react-text-highlight';

class App extends React.Component {

  render() {
    return (
      <div>
        <TextHighlight
          highlight="ago"
          text="A long time ago, in a galaxy far, far away...."
        />
      </div>
    );
  }
}
```

## Properties

#### highlight

String to be highlighted.

#### text

Text to look for highlighted value.

#### markTag

The HTML element name for the highlighted text, the default is `mark`.

#### caseSensitive

Boolean value for case sensitive search, the default is `false`.

