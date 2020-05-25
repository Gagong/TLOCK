class Observable{
    constructor(){
        this.observers = [];
    }

    subscribe(subscriber){
        this.observers.push(subscriber);
    }

    unsubcribe(subscriber){
        let index = this.observers.indexOf(subscriber);

        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(){
        this.observers.forEach(
            observer => observer.handleNotify()
        );
    }
}