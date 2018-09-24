var Counters = React.createClass({
  render: function() {
    return React.createElement(
      'div',
      {},
      React.createElement(Counter),
      React.createElement(Counter),
      React.createElement(Counter)
    )
  }
})

var elem = React.createElement(Counters);
ReactDOM.render(elem, document.getElementById('app'));