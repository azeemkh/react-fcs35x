import { UPDATE_ITEM } from '../constant.js';

const initialState = {
  itemsData: [
    {
      id: '1',
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      name: 'John Brown',
      age: 32
    },
    {
      id: '2',
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      name: 'Jim Green',
      age: 42
    },
    {
      id: '3',
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      name: 'Joe Black',
      age: 32
    }
  ]
};

export const itemsData = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEM: {
      return {
        ...state,
        itemsData: [...state.itemsData, { ...action.payload }]
      };
    }
    default:
      return state;
  }
};
