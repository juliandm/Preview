/**
 * Explorer selectors
 */

import { createSelector } from 'reselect';

export const selectExplorer = (state, props) => state.explorer;

  
  export const selectCurrentId = (state, props) => props.id;

  export const selectDataByTab = createSelector([selectExplorer,selectCurrentId],(substate, id)=>substate[id]);
  
  export const makeSelectTopics = () => createSelector(selectExplorer,(substate) => substate.topics); 
  export const makeSelectActiveTabs=()=> createSelector(selectExplorer,(state)=>state.activeTabs);