package todo

class BootStrap {

    def init = { servletContext ->
        2.times { new Todo(description: "Todohk      ${it+1}").save() }
    }
    def destroy = {
    }
}
