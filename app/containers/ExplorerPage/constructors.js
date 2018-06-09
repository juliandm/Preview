
import { fromJS } from 'immutable';

// The initial state of the App
export const initialState = function (){
     return fromJS({
        loading: false,
        error: false,
        currentTopic: false,
        topics: [topicConstructor()]
    });
}



export const topicDataConstructor = function (data) { // data is object of all changed attributes
    const dataObject = {
      //Learning
      links:false,
      procon: false, 
      stats:false, 
      tips:false,
      learningSettings:false,
      //Structure
      parts: false, // shared and unique
      alternatives:false, 
      parents:false, 
      structureSettings:false,
      //Info
      description:false, 
      attributes:false, 
      users: false, // experts and mentors
      infoSettings:false
    }
    for (let attr in data) {
      dataObject[attr] = data[attr]
    }
    return fromJS(dataObject)
}
  
export const topicConstructor = function (name="",data={},changed=false,loading=false){
    return fromJS({
        "name":name,
        "data":topicDataConstructor(data),
        "changed":changed, 
        "loading":loading
    })
}
  
  