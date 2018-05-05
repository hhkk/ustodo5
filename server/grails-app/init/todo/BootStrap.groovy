package todo

class BootStrap {

    def init = { servletContext ->
        System.out.println("in BootStrap init");
        2.times { new Todo(description: "Todo #${it+1} " + new java.util.Date()).save() }

    }
    def destroy = {
        System.out.println("in BootStrap destroy");
    }
}
