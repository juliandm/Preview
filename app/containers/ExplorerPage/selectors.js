/**
 * Explorer selectors
 */

import { createSelector } from 'reselect';

export const selectExplorer = (state) => state.explorer;

  
  export const selectCurrentId = (state, props) => props.id;

  export const selectDataByTab = createSelector([selectExplorer,selectCurrentId],(substate, id)=>substate[id]);
  
  export const makeSelectTopics = () => createSelector(selectExplorer,(substate) => substate.topics); 
  export const makeSelectActiveTabs=()=> createSelector(selectExplorer,(state)=>state.activeTabs);


//   //Learning
  export const makeSelectLinks=()=> createSelector(selectExplorer,(state)=>state.links);
  export  const makeSelectProcon=()=> createSelector(selectExplorer,(state)=>state.procon);
  export  const makeSelectStats=()=> createSelector(selectExplorer,(state)=>state.stats); 
  export  const makeSelectTips=()=> createSelector(selectExplorer,(state)=>state.tips);
  export  const makeSelectLearningSettings=()=> createSelector(selectExplorer,(state)=>state.learningSettings);
  //Structure
  export  const makeSelectParts=()=> createSelector(selectExplorer,(state)=>state.parts); // shared and unique
  export  const makeSelectAlternatives=()=> createSelector(selectExplorer,(state)=>state.alternatives);
  export  const makeSelectParents=()=> createSelector(selectExplorer,(state)=>state.parents);
  export  const makeSelectStructureSettings=()=> createSelector(selectExplorer,(state)=>state.structureSettings);
  //Info
  export  const makeSelectDescription=()=> createSelector(selectExplorer,(state)=>state.description); 
  export const makeSelectAttributes=()=> createSelector(selectExplorer,(state)=>state.attributes); 
  export const makeSelectUsers=()=> createSelector(selectExplorer,(state)=>state.users); // experts and mentors
  export const makeSelectInfoSettings=()=> createSelector(selectExplorer,(state)=>state.infoSettings);


