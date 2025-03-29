# Tourism App

This is a tourism web application built with **Angular v19.2.4**. The application allows users to explore various tourist destinations, view detailed information about places, and plan their trips efficiently.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Development](#development)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse tourist destinations and categories
- View detailed information about places (description, images, reviews)
- Search and filter destinations
- Save favorite destinations
- Responsive design for mobile and desktop
- Interactive map with location markers
- Multi-language support

## Technologies

- [Angular v19](https://angular.io/) - Frontend framework
- [RxJS](https://rxjs.dev/) - Reactive programming
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language
- [Angular Material](https://material.angular.io/) - UI component library
- [Firebase](https://firebase.google.com/) - Backend as a service (optional)

## Installation

To run this application locally, you need to have [Node.js](https://nodejs.org/) installed.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tourism-app.git
   cd tourism-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create an `.env` file in the root directory and configure the necessary API keys for map services or Firebase (if using).
   
   Example `.env`:

   ```bash
   FIREBASE_API_KEY=your-firebase-api-key
   ```

## Running the Application

After installing the dependencies, you can start the development server:

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200`. The app will automatically reload if you make any changes to the source files.

## Development

### Running Unit Tests

You can run unit tests using the following command:

```bash
ng test
```

### Running End-to-End Tests

To run end-to-end tests, use:

```bash
ng e2e
```

### Linting

Ensure code quality by running lint checks:

```bash
ng lint
```

## Folder Structure

The key folders of the project are as follows:

```
src/
│
├── app/                  # Main Angular app module and components
│   ├── components/       # Reusable components (e.g., destination-card, map)
│   ├── services/         # Services for API interactions
│   ├── models/           # TypeScript interfaces and models
│   └── pages/            # Page components (e.g., home, destination details)
│
├── assets/               # Static assets such as images and icons
├── environments/         # Environment configurations (development, production)
│
└── styles/               # Global styles and theme files
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them with clear messages.
4. Push your branch and create a pull request.

## License

This project is licensed under the MIT License.