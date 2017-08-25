export const selectItem = (item) => {
  console.log("You clicked on item: ", item.first);
  return {
    type: 'ITEM_SELECTED',
    payload: item
  }
};
