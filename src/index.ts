class User {
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  private notebooks: NoteBook[] = [];

  constructor(
    protected id: number,
    public name: string,
    public email: string,
    private _password: string,
    public phone: string,
    private _age: number,
  ) {
    if (!(this.age >= 18 && this.age <= 60)) {
      throw new Error("Age Must between 18 & 60");
    }
  }
  displayInfo(): void {
    console.log(
      `This is My Info My Id: ${this.id},name: ${this.name}, email:${this.email}, _password:${this._password},My phoneNumber is ${this.phone}, finally My age is ${this.age} `,
    );
  }

  addNoteBook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
    console.log(`NoteBook "${notebook.title}" added to ${this.name}`);
  }

  displayNoteBooks(): void {
    if (this.notebooks.length === 0) {
      console.log("No notebooks found!");
      return;
    }
    this.notebooks.forEach((nb) => console.log(`- ${nb.title}`));
  }
}

let User1 = new User(
  2200958,
  "Ziad Talat",
  "moaliziad@gmail.com",
  "#$150",
  "01206802113",
  40,
);
User1.displayInfo();

class Admin extends User {
  manageNotes(): string {
    return `${this.name} can Manage Notes Here!`;
  }
}

let Admin1 = new Admin(
  2201041,
  "Abdelrhman Ibrahim",
  "eslam@gmial.com",
  "12305d$%",
  "01281208604",
  24,
);
console.log(Admin1.manageNotes());

class Notes {
  constructor(
    public id: number,
    public title: string,
    public content: string,
    public userID: User,
    public Auther: User,
  ) {}
  preview(): string {
    return `The content of This Note is ${this.content} , Written By ${this.userID.name}and The Auther is ${this.Auther.name}`;
  }
}

let Note1 = new Notes(
  2201044,
  "TheGoalGrateness",
  "Talk about The grateness of C.Ronaldo in Football",
  User1,
  User1,
);
console.log(Note1.preview());

class NoteBook {
  private notes: Notes[] = [];

  constructor(public title: string) {}

  addNote(note: Notes): void {
    this.notes.push(note);
    console.log(`Note "${note.title}" added!`);
  }

  removeNote(noteId: number): void {
    this.notes = this.notes.filter((note) => note.id !== noteId);
    console.log(`Note with ID ${noteId} removed!`);
  }

  displayAllNotes(): void {
    if (this.notes.length === 0) {
      console.log("No notes found!");
      return;
    }
    this.notes.forEach((note) => console.log(note.preview()));
  }
}

let myNoteBook = new NoteBook("Football Notes");
myNoteBook.addNote(Note1);
myNoteBook.displayAllNotes();
myNoteBook.removeNote(2201044);
myNoteBook.displayAllNotes();

let notebook2 = new NoteBook("Study Notes");
User1.addNoteBook(myNoteBook);
User1.addNoteBook(notebook2);
User1.displayNoteBooks();
//7
interface Game {
  title: string;
  content: string;
  date: string;
  price: number;
}

class Storage<t> {
  public data: t[] = [];
  addItem(item: t): void {
    this.data.push(item);
  }
}

let Storage1 = new Storage<Game>();
Storage1.addItem({
  title: "Game",
  content: "Football",
  date: "4/5/2026",
  price: 50000,
});

console.log(Storage1);
