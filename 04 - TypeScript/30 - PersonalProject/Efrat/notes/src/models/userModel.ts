export class User {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  notes: string[];
  constructor(
    firstname: string,
    lastname: string,
    username: string,
    password: string
  ) {
    this.id = crypto.randomUUID();
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.notes = [];
  }

  newUser(user: User): boolean {
    try {
      if (users.push(user)) {
        return true;
      } else {
        throw new Error("User not created");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  addNote(noteId: string, user: User) {
    try {
      if (user.notes.push(noteId)) {
        return true;
      } else {
        throw new Error("note not assigned to user");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  deleteNote(noteId: string, user: User){
        try {
          user.notes = user.notes.filter(note=> note !== noteId);
        } catch (error) {
          
        }
  }
}

export const users: User[] = [new User("Efrat", "Kohn", "efrat@abc.com", "1")];
