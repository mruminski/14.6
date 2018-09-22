var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  render: function() {
    return React.createElement('div', {}, 
      React.createElement('span', {}, 'Counter: ' + this.state.counter)
      );
  }
});

var elem = React.createElement(Counter);
ReactDOM.render(elem, document.getElementById('app'));