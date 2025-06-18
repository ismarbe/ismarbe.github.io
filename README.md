# User Minutes Application

 

This project is a simple web application that allows users to add their names, minutes, and dates, and then save this data in an Excel file. The application is built using HTML, CSS, and JavaScript, and utilizes the SheetJS library for Excel file generation.

 

## Project Structure

 

```

user-minutes-app

├── src

│   ├── index.html        # Main HTML document for the user interface

│   ├── app.js            # JavaScript logic for handling form submissions and data management

│   ├── styles.css        # CSS styles for the application

│   └── utils

│       └── excel.js      # Utility functions for creating and downloading Excel files

├── package.json          # Configuration file for npm, listing dependencies and scripts

└── README.md             # Documentation for the project

```

 

## Getting Started

 

To get started with the User Minutes Application, follow these steps:

 

1. **Clone the repository**:

   ```

   git clone <repository-url>

   cd user-minutes-app

   ```

 

2. **Install dependencies**:

   Make sure you have Node.js installed. Then run:

   ```

   npm install

   ```

 

3. **Run the application**:

   You can open the `src/index.html` file in your web browser to view the application.

 

## Usage

 

- Fill in the form with the user's name, minutes, and date.

- Click the "Add" button to submit the data.

- Once you have added all the necessary entries, click the "Download Excel" button to save the data in an Excel file.

 

## Dependencies

 

This project uses the following libraries:

- SheetJS (for Excel file generation)

 

## License

 

This project is licensed under the MIT License. See the LICENSE file for more details.