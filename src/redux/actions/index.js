// Akcje to jedyny sposob na zmiane wartosci w store
export const GET_DATA_REQUESTED = 'GET_CONTACTS_REQUESTED';
export const GET_DATA_DONE = 'GET_CONTACTS_DONE';
export const GET_DATA_FAILED = 'GET_CONTACTS_FAILED';
export const SEARCH_CONTACTS = 'SEARCH_CONTACTS';
export const CHANGE_SEED = 'CHANGE_SEED';

export const getDataRequested = () => ({
  type: GET_DATA_REQUESTED
});

export const getDataDone = (data) => ({
  type: GET_DATA_DONE,
  payload: data
});

export const getDataFailed = (error) => ({
  type: GET_DATA_FAILED,
  payload: error
});

// export const getData = () => (dispatch) => {
//   dispatch(getDataRequested()); // set state to loading

//   fetch("https://randomuser.me/api/?format=json&results=10")
//     .then(response => response.json())
//     .then(data => {
//       dispatch(getDataDone(data)); //set state to success
//     })
//     .catch(error => {
//       dispatch(getDataFailed(error)); //set state to failed
//     })
// }

export const getData = () => (dispatch, getState) => {
  dispatch(getDataRequested()); // set state to loading
  console.log("DUPA ", getState().seedDataReducer);
  fetch("https://randomuser.me/api/?format=json&results=10&seed=" +  encodeURIComponent(getState().seedDataReducer))
    .then(response => response.json())
    .then(json => {
      dispatch(getDataDone(json)); //set state to success
    })
    .catch(error => {
      dispatch(getDataFailed(error)); //set state to failed
    })
}

// ================ Wyszukiwanie ================
export const searchContacts = (text) => ({
  type: SEARCH_CONTACTS,
  text
})

// ================ SeedPicker ================
export const changeSeed = (newSeed) => ({
  type: CHANGE_SEED,
  seed: newSeed
})

export const changeSeedAndFetch = (seed) => (dispatch) => {
  dispatch(changeSeed(seed));
  dispatch(getData());
}

