import _ from 'underscore';

import {FETCH_LISTS} from "../actions";
import {ADD_ITEM} from "../actions";

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
    case FETCH_LISTS:
      // this underscores method takes a datalist and a desired key for
      // each item and returns an object with an index of each item.
      return _.indexBy(action.payload.data, "_id");
    default:
      return state;
  }
}
