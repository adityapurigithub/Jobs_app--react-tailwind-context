export default (state, action) => {
  switch (action.type) {
    case "FETCHING":
      return { ...state, loading: true };

    case "FETCHED":
      return { ...state, jobs: action.payload, loading: false };

    case "FETCHED_JOB_DETAILS":
      return { ...state, jobDetails: action.payload, loading: false };

    default:
      return state;
  }
};
