interface ConstructorProps {
  id: string;
  name: string;
  email: string;
}

export class User {
  public id: string;
  public name: string;
  public email: string;

  constructor({ id, email, name }: ConstructorProps) {
    this.id = id;
    this.email = email;
    this.name = name;
  }
}
