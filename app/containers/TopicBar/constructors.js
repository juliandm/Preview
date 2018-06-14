

// The initial state of the App
export const initialState = function (){
     return {
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
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
export const topicConstructor = function (name="",id=ID(),error="No topic found", changed=false, loading=false){
    return {
        "name":name,
        "id": id,
        "error":error,
        "changed":changed, 
        "loading":loading
    }
}
  
  