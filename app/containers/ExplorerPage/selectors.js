/**
 * Explorer selectors
 */

import { createSelector } from 'reselect';

export const selectExplorer = (state, props) => state.explorer;
export const selectExplorerSearch = (state, props) => state.form.explorerSearch;


  
export const selectCurrentId = (state, props) => props.id;

// export const selectAttributeById = createSelector([selectExplorer,selectCurrentId],(substate, id)=>substate[id]);
export const makeSelectAttributes = () => createSelector(selectExplorer,(substate) => substate.attributes); 

export const makeSelectTopics = () => createSelector(selectExplorer,(substate) => substate.topics); 
export const makeSelectTopicIds = () => createSelector(selectExplorer,(substate) => substate.topics.map(topic=>topic._id) ); 
export const makeSelectSearching =()=> createSelector(selectExplorer,(state)=>state.searching);
export const makeSelectLoading =()=> createSelector(selectExplorer,(state)=>state.loading);
export const makeSelectChanged =()=> createSelector(selectExplorer,(state)=>state.changed);



export const makeSelectSearchValue =()=> createSelector(selectExplorerSearch,(state)=>state.values.searchInput);

export const makeSelectSearchResults =()=> createSelector(selectExplorer,(state)=>state.searchResults);