const reducer = (state = initialEntries, action) => {
  let newEntries;
  switch (action.type) {
    case "ADD_ENTRY":
      newEntries = state.concat({ ...action.payload });
      return newEntries;

    case "REMOVE_ENTRY":
      newEntries = state.filter((entry) => {
        return entry.id !== action.payload;
      });

      return newEntries;

    default:
      return state;
  }
};
export default reducer;

var initialEntries = [
  { id: 1, description: "Work Income redux", value: 1000.0, isExpense: false },
  { id: 2, description: "Water Bill redux", value: 20.0, isExpense: true },
  { id: 3, description: "Rent", value: 300.0, isExpense: true },
  { id: 4, description: "Power Bill", value: 50.0, isExpense: true },
];
