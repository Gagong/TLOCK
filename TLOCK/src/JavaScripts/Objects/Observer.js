class Observer{
    constructor(){
        this.subscriptions = [];
    }

    subscribeFor(subscriptionObject){
        subscriptionObject.subscribe(this);
        this.subscriptions.push(subscriptionObject);
    }

    handleNotify(){
        ;
    }
}