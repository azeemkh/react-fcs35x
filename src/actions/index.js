import { UPDATE_ITEM } from '../constant';

export const updateItems = data => {
  return {
    payload: data,
    type: UPDATE_ITEM
  };
};
