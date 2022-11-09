 export     class User {
    private _name: string;
    private _email: string;
    _role: number;

    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    getName(): string {

        return this._name;

    }

    setName(value: string) {

        this._name = value;

    }

    getEmail(): string {

        return this._email;

    }

    setEmail(value: string) {

        this._email = value;

    }

    getRole(): number {

        return this._role;

    }

    setRole(value: number) {

        this._role = value;

    }
}