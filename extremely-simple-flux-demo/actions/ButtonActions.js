var AppDispatcher = require('../dispatcher/AppDispatcher');

var ButtonActions = {

  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },

  removeItem:function(id) {
    AppDispatcher.dispatch({
      actionType: 'REMOVE_ITEM',
      id:id
    })
  }

};

module.exports = ButtonActions;
