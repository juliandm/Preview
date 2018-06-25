

// The initial state of the Explorer
export const initialState = function (){
     return {
        topics: [],       
        tree: {},
        searching: false,
        searchResults: []
    };
}
export const infoConstructor = function (){
    return {
        //Info
        links:[],
        procon:[], 
        stats:[], 
        tips:[],
        description:[], 
        attributes:[], 
        users:[], // experts and mentors
    }
}
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
export const topicConstructor = function ({name="",id=ID(),error="No topic found", changed=false, loading=false}){
    return {
        "name":name,
        "id": id,
        "error":error,
        "changed":changed, 
        "loading":loading,        
        "attributes": [],
        "info": {...infoConstructor()}
    }
}
  
  