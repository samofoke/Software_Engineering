// Access modifiers

class Myperson {
  constructor(private msg: string) {}

  LetsSpeak() {
    console.log(this.msg);
  }
}

const sam = new Myperson("Hello World....");

//sam.msg = "Lets hear your swwet voice.";

sam.LetsSpeak();
