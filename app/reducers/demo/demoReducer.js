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
            console.log("Non riesco a fetchare dall'api...")
        default:
            return state;
    }
};

export default demo;
