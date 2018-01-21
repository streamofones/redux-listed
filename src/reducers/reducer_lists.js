import _ from 'underscore';

import {FETCH_LISTS} from "../actions"

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_LISTS:
      // this underscores method takes a datalist and a desired key for
      // each item and returns an object with an index of each item.
      return _.indexBy(action.payload.data, "_id");
    default:
      return state;
  }
}
