package todo


import grails.rest.*
import grails.converters.*

class TodoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    TodoController() {
        super(Todo)
    }

    // had to remove //@Resource in Todo.groovy for this to work 
    def pending() {

        System.out.println("in TodoController pending");

        respond Todo.findAllByDone(false), view: 'index'
    }
}
