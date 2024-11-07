class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log("Accessing website data...");
    }
}

// Example usage (optional)
const user1 = new User("John Doe", "john.doe@example.com");
user1.viewData();
