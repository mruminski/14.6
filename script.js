var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter +1
    });
  },

  render: function() {
    return React.createElement('div', {}, 
      React.createElement('span', {}, 'Counter: ' + this.state.counter)
      );
  }
});

var elem = React.createElement(Counter);
ReactDOM.render(elem, document.getElementById('app'));