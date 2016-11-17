export const SET_NAME = 'SET_NAME';


// async function doApiCall() {
//   setTimeout(() => {
//     return Promise.resolve('data');
//   }, 2000);
// }

const setName = () => {
  return async (dispatch) => {
    
    try {
      const name = await doApiCall();
      dispatch({ type: SET_NAME, payload: name })
    } catch (e) {
      dispatch({ type: 'error', name: 'error', value: e.message })
    }
  }
}

const doApiPromiseCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data');
    }
      , 2000);
  });
};

export const setName = () => {
  return dispatch => {
    //const name = await doApiCall();
    //return dispatch({ type: SET_NAME, payload: name });

    doApiPromiseCall()
      .then(name =>
        dispatch({ type: SET_NAME, payload: name })
      );


  };
};






