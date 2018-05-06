package todo


import grails.rest.*


// my updates like
// curl -i -H "Content-Type: application/json" --data '{"done": true}' -X PUT 0:8080/todos/32
// still seem to work without @Resorce. maybe @Resource put down files -- hbk
//@Resource(uri = '/todos', readOnly = false, formats = ['json', 'xml'])
class Todo {
    String description
    boolean done


}