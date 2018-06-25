/**
 * Explorer selectors
 */

import { createSelector } from 'reselect';

export const selectExplorer = (state, props) => state.explorer;
export const selectExplorerSearch = (state, props) => state.form.explorerSearch;


  
export const selectCurrentId = (state, props) => props.id;

export const selectDataByTab = createSelector([selectExplorer,selectCurrentId],(substate, id)=>substate[id]);

export const makeSelectTopics = () => createSelector(selectExplorer,(substate) => substate.topics); 
export const makeSelectTopicIds = () => createSelector(selectExplorer,(substate) => substate.topics.map(topic=>topic.id) ); 
export const makeSelectSearching =()=> createSelector(selectExplorer,(state)=>state.searching);

export const makeSelectSearchValue =()=> createSelector(selectExplorerSearch,(state)=>state.values.searchInput);

export const makeSelectSearchResults =()=> createSelector(selectExplorer,(state)=>state.searchResults);