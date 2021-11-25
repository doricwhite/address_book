## MongoDB Sample Project

This is a little address book project testing CRUD (Create, Read, Update, Delete) functionality to a mongo database.

The technologies that were used include:

- [Bulma](https://bulma.io/)
- [Mongo](https://docs.mongodb.com/manual/)
- [Mongoose](https://mongoosejs.com/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)

## How to execute the project

- Check if **MongoDB** is installed on your computer. Use the command `mongo -version` from terminal to check for this. If a received a message showing somthing similar to `MongoDB shell version v5.0.2` then it is installed. If not use the link provided earlier to complete this step.
- Copy the repository in an empty directory on your local machine. Before doing so ensure "git" is not initialized that that directory.

  - Terminal Commands:

    - Git initialization check: `git status`
    - Copy to repository local machine: `git clone https://github.com/doricwhite/address_book.git`

- Check if **Node.js** is installed on your computer. You can check this by running the command `node` in the terminal window. If you note a sample message stating **"Welcome to node.js"** then it is already installed. If not, proceed to [Node.js](https://nodejs.org/en/download/) website and download and install the version for your computer operating system.
- After completing the above steps execute the command below in terminal from the **"address_book"** directory located in the directory used in the first step. This will install the required packages needed for the project.

  - `npm install`

- To view website run the command `node app.js` in your terminal window. You should see a message stating **"Localhost Port 3000 Running Successfully"** and **"Connection to addressBook DB Successful"** when done correctly.
- Open your web browser and paste `http://localhost:3000/address-book/index` in the address bar. This will open the homepage of the website which shows a list of the address names currently available in the address book. **N.B.** This page may be empty for your initial use as the database may empty.
