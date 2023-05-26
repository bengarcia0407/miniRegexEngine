# Mini Regular Expression Engine with React and Node.js

This project implements a mini regular expression engine using React for the frontend and Node.js with Express for the backend. The engine supports literals and alternation via the "|" (pipe) symbol.

## Design Assumptions

1. The regex engine will return all matches, not just the first one it encounters.
2. The regex engine will not support pattern repetitions or wildcard characters.
3. The regex engine will not support grouping, as such parenthesis are not considered.
4. Case sensitivity is maintained, i.e., it does not perform a case insensitive search.
5. The regex engine will consider "|"(pipe) as a special character for alternation, and will treat other special characters as literals.
6. Only non-overlapping matches will be considered. If a pattern "cat|c" is given for string "cat", only "cat" is matched.

## Project Structure

The project is structured into two main directories:

- `client/` contains the React application.
- `server/` contains the Express server.


## Setup and Run

### Backend

To setup and run the backend:

1. Navigate to the `server` directory in your terminal.
2. Run `npm install` to install the necessary dependencies.
3. Run `node server.js` to start the server.

The server will start on `http://localhost:5000`.

### Frontend

To setup and run the frontend:

1. Navigate to the `client` directory in your terminal.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the React application.

The application will start on `http://localhost:3000`.

## Usage

Enter a pattern and a string in the respective input fields on the React application, and then click on "Find Matches". The application will send a POST request to the backend with the pattern and string, and the backend will return the matches which are then displayed on the frontend.

For example, if you enter the pattern "cat|dog" and the string "the cat sat on the dog", the application will display ["cat", "dog"] as the matches.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
