# Work Hour Reports Client

This Angular client application is designed to manage work hour reports for instructors in courses. It includes features for user authentication, employee management, course management, and data display based on user permissions.

## Features

- **User Authentication**: Secure login and logout functionality with token management.
- **Employee Management**: Add, update, and delete employee records.
- **Course Management**: Manage course details, including adding and editing courses.
- **Work Hour Reports**: View and manage work hour reports based on user permissions.
- **User Profile**: Display and edit the profile information of the logged-in user.
- **Responsive Navigation**: A navigation bar for easy access to different sections of the application.

## Project Structure

```
work-hour-reports-client
├── src
│   ├── app
│   │   ├── core
│   │   │   ├── auth
│   │   │   ├── services
│   │   │   └── models
│   │   ├── features
│   │   ├── shared
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   ├── assets
│   └── environments
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd work-hour-reports-client
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the application in development mode, use the following command:
```
ng serve
```
Navigate to `http://localhost:4200/` in your browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.