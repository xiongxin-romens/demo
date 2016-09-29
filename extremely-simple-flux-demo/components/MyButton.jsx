var React = require('react');
var ListStore = require('../stores/ListStore');
var ButtonAction = require('../actions/ButtonActions');

var MyButton = React.createClass ({

  getInitialState: function() {
    return {
      items: ListStore.getAll()
    };
  },

  componentDidMount: function() {
    ListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ListStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      items: ListStore.getAll()
    });
  },

  render:function(){

    var itemHtml = this.state.items.map(function (listItem, i) {
      console.log(i);
          return <li key={i}>{listItem}&nbsp;&nbsp;&nbsp;<button onClick={function(){
          ButtonAction.removeItem(i)}}>移除</button></li>;
        });

    return (
        <div>
          <ul>{itemHtml}</ul>
          <button onClick={this.props.onClick}>add Item</button>
        </div>
    )
  }

});

module.exports = MyButton;
