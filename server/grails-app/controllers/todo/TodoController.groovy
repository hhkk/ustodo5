package todo


import grails.rest.*
import grails.converters.*

class TodoController extends RestfulController {
//class TodoController {
    static responseFormats = ['json', 'xml']
    TodoController() {
        super(Todo)
    }

    // had to remove //@Resource in Todo.groovy for this to work
    def pending() {

        System.out.println("in TodoController pending");
        System.out.println("in TodoController pending");
        System.out.println("in TodoController pending");
        System.out.println("in TodoController pending");
        System.out.println("in TodoController pending");

        respond Todo.findAllByDone(true), view: 'index'
    }
    // had to remove //@Resource in Todo.groovy for this to work but TodoController extends a rest thingy so ...

    // ~/utd/180501CAngSecAngular/todo>curl -i 0:8080/findall
    def findall() {

        System.out.println("in TodoController findall");

        respond Todo.findAll(), view: 'index'
    }
}
