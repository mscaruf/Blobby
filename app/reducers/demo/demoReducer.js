const demo = (state = '', action) => {
    switch (action.type) {
        case "FETCH_FROM_API":
            return [
                  ...state,
                  {
                      apidata: action.response.data
                  }
              ]
        case "ERROR":
            console.log("Cannot fetch from API...")
        default:
            return state;
    }
};

export default demo;
