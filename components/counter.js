var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  // getDefaultProps() {
  //   console.log('Use this method to set default values for props');
  // },

  // componentWillMount() {
  //   console.log('Started before render to DOM');
  // },

  // componentDidMount() {
  //   console.log('This method runs immediately after render');
  // },

  // componentWillReceiveProps() {
  //   console.log('Invoked only when gets a new props');
  // },

  // shouldComponentUpdate() {
  //   console.log('Does it require render again?');
  // },

  // componentWillUpdate() {
  //   console.log('Runs if shouldComponentUpdate() return true');
  // },

  // componentDidUpdate() {
  //   console.log('This method is analogous to componentDidUpdate()');
  // },

  // componentWillUnmount() {
  //   console.log('In this place you can run code before delete component');
  // },

  render: function() {
    return React.createElement(
      'div',
      {},
      React.createElement('p', {}, 'Counter: ' + this.state.counter),
      React.createElement(
        'button',
        {
          type: 'submit',
          onClick: this.increment
        },
        'increment'
      ),
      React.createElement(
        'button',
        {
          type: 'submit',
          onClick: this.decrement
        },
        'decrement'
      )
    );
  }
});
