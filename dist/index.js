"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    _password;
    phone;
    _age;
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    notebooks = [];
    constructor(id, name, email, _password, phone, _age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this._password = _password;
        this.phone = phone;
        this._age = _age;
        if (!(this.age >= 18 && this.age <= 60)) {
            throw new Error("Age Must between 18 & 60");
        }
    }
    displayInfo() {
        console.log(`This is My Info My Id: ${this.id},name: ${this.name}, email:${this.email}, _password:${this._password},My phoneNumber is ${this.phone}, finally My age is ${this.age} `);
    }
    addNoteBook(notebook) {
        this.notebooks.push(notebook);
        console.log(`NoteBook "${notebook.title}" added to ${this.name}`);
    }
    displayNoteBooks() {
        if (this.notebooks.length === 0) {
            console.log("No notebooks found!");
            return;
        }
        this.notebooks.forEach((nb) => console.log(`- ${nb.title}`));
    }
}
let User1 = new User(2200958, "Ziad Talat", "moaliziad@gmail.com", "#$150", "01206802113", 40);
User1.displayInfo();
class Admin extends User {
    manageNotes() {
        return `${this.name} can Manage Notes Here!`;
    }
}
let Admin1 = new Admin(2201041, "Abdelrhman Ibrahim", "eslam@gmial.com", "12305d$%", "01281208604", 24);
console.log(Admin1.manageNotes());
class Notes {
    id;
    title;
    content;
    userID;
    Auther;
    constructor(id, title, content, userID, Auther) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userID = userID;
        this.Auther = Auther;
    }
    preview() {
        return `The content of This Note is ${this.content} , Written By ${this.userID.name}and The Auther is ${this.Auther.name}`;
    }
}
let Note1 = new Notes(2201044, "TheGoalGrateness", "Talk about The grateness of C.Ronaldo in Football", User1, User1);
console.log(Note1.preview());
class NoteBook {
    title;
    notes = [];
    constructor(title) {
        this.title = title;
    }
    addNote(note) {
        this.notes.push(note);
        console.log(`Note "${note.title}" added!`);
    }
    removeNote(noteId) {
        this.notes = this.notes.filter((note) => note.id !== noteId);
        console.log(`Note with ID ${noteId} removed!`);
    }
    displayAllNotes() {
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
class Storage {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
}
let Storage1 = new Storage();
Storage1.addItem({
    title: "Game",
    content: "Football",
    date: "4/5/2026",
    price: 50000,
});
console.log(Storage1);
//# sourceMappingURL=index.js.map