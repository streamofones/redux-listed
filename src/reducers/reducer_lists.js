import _ from 'underscore';

import {FETCH_LISTS, ADD_ITEM, UPDATE_SCORE} from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const newItem = action.payload.data.item;
      const listId = action.payload.data.item.belongs_to;

      // ... is to spread
      return {
        ...state,
        [listId]: {
          ...state[listId],
          items: [...state[listId].items, newItem]
        }
      };
    }
    case UPDATE_SCORE: {
      const newState = JSON.parse(JSON.stringify(state));

      // create some variables from our ajx response.
      const listId = action.payload.data.item.belongs_to;
      const newItem = action.payload.data.item;
      const itemId = action.payload.data.item._id;

      // grab the array of list items
      let listItems = newState[listId].items;

      // search for the index of the list item we are updated
      const index = listItems.findIndex(item => item._id == itemId);

      // mutate the NEW COPY of state itself
      listItems[index] = newItem;

      return newState;
    }
    case FETCH_LISTS:
      // this underscores method takes a datalist and a desired key for
      // each item and returns an object with an index of each item.
      return _.indexBy(action.payload.data, "_id");
    default:
      return state;
  }
}
