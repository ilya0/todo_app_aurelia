export function configure(aurelia) {
    // this is the configuration main file
    aurelia.use.basicConfiguration();
    aurelia.start().then() => aurelia.setRoot());

}