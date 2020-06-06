class Data {

    userInfo = new Object();

    constructor(){
        this.userInfo = {
            name: 'User Name',
            version: window.clientInformation.appVersion,
            lang: window.navigator.languages,
            memory: window.performance.memory,
            timing: window.performance.timing
        }
    }

}

const data = new Data();
console.log(data);
