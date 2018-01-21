import axios from "axios";

// Use a constant for action types, so that the compiler may catch typos.
export const FETCH_LISTS = "fetch_lists";

// saves the root url as a variable
const rootUrl = `http://lists.hackeryou.com`;

export function fetchLists() {
  // sets up an axios request that returns a promise
  const request = axios.get(`${rootUrl}/list`);
  console.log('request:', request);
  return {
    type: FETCH_LISTS,
    // the promise itself is the payload, which is why we need to use
    // the redux-promise middleware in order for this to work.
    // the redux-promise middleware will automagically resolve this promise for us whenever the action is fired.
    payload: request
  };
}
