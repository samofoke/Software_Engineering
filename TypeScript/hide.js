// Access modifiers
var Myperson = /** @class */ (function () {
    function Myperson(msg) {
        this.msg = msg;
    }
    Myperson.prototype.LetsSpeak = function () {
        console.log(this.msg);
    };
    return Myperson;
}());
var sam = new Myperson("Hello World....");
//sam.msg = "Lets hear your swwet voice.";
sam.LetsSpeak();
