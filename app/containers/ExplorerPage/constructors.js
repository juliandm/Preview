

// The initial state of the Explorer
export const initialState = function (){
     return {
        topics: [],       
        tree: {},
        loading: false,
        changed: false,
        error: "",
        attributes: [],
        info: {...infoConstructor()},
        searching: false,
        searchResults: [],
        
        description:[],         
        links:[],
        procon:[], 
        stats:[], 
        tips:[],
        users:[], // experts and mentors
    };
}
export const infoConstructor = function (){
    return {
        //Info

    }
}
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
export const topicConstructor = function ({name="",id,error="No topic found", changed=false, loading=false}){
    return {
        "name":name,
        "_id": id,
    }
}
  
  