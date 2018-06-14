

// The initial state of the App
export const initialState = function (){
     return {
        loading: false,
        error: false,
        activeTabs: [],
        topics: [],
        ...tabConstructor()
    };
}
export const tabConstructor = function (){
    return {
        //Learning
        links:[],
        procon:[], 
        stats:[], 
        tips:[],
        learningSettings:[],
        //Structure
        parts:[], // shared and unique
        alternatives:[], 
        parents:[], 
        structureSettings:[],
        //Info
        description:[], 
        attributes:[], 
        users:[], // experts and mentors
        infoSettings:[]
    }
}
  
export const topicConstructor = function (name="",changed=false, loading=false){
    return {
        "name":name,
        "changed":changed, 
        "loading":loading
    }
}
  
  