import { createHookstate } from '@hookstate/core';

const store = createHookstate({
  allTeamsList: [],
  searchItem: '',
  searchResults: []
});

export default store;
