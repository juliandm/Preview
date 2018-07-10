import qs from "query-string"

  export const convertTopicIdsToUrl = function (topicIds) {
    return qs.stringify({"t":topicIds},{arrayFormat: 'bracket'})
  }