# Object Management Software

A React TypeScript application for creating, managing, and visualizing objects with their relationships.

## Overview

This application allows users to manage different types of objects (Desk, Computer, Server, Human) and define relationships between them. It provides a simple and intuitive interface for creating, editing, viewing, and deleting objects, as well as establishing connections between related objects.

## Features

- **Object Management**: Create, view, edit, and delete objects
- **Object Types**: Support for different object types (Desk, Computer, Server, Human)
- **Relationship Management**: Link objects to establish relationships
- **Search & Filter**: Find objects by name or description
- **Persistent Storage**: Data is saved in the browser's localStorage
- **Responsive UI**: Clean and intuitive user interface

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd object-management-software
   ```

2. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

3. Start the development server:

   ```
   npm start
   ```

   or

   ```
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

This app is fully deployed on Amazon AWS S3 [here](http://228495507529-object-management-software.s3-website-us-east-1.amazonaws.com/)

### Creating Objects

1. Fill in the "Add New Object" form with:
   - Name
   - Description
   - Type (select from dropdown)
   - Optionally link to other existing objects
2. Click "Add Object" to create the new object

### Managing Objects

- **View Details**: Click on an object in the list to view its details
- **Edit**: Click the "Edit" button on an object to modify its properties
- **Delete**: Click the "Delete" button to remove an object
- **Search**: Use the search box to filter objects by name or description

### Linking Objects

1. When creating or editing an object, use the "Link Object" search field
2. Start typing to see matching objects
3. Select an object from the dropdown to link it
4. Linked objects will appear in the list below the search field
5. To remove a link, click the "x" button next to the linked object

## Project Structure

- `src/App.tsx`: Main application component
- `src/context/ObjectContext.tsx`: State management using React Context API
- `src/components/`:
  - `ObjectList.tsx`: Displays the list of objects with search and actions
  - `ObjectForm.tsx`: Form for creating and editing objects
  - `ObjectDetails.tsx`: Displays detailed information about an object
  - `Modal.tsx`: Reusable modal component for details and forms

## Data Persistence

The application uses the browser's localStorage to persist data between sessions. All objects and their relationships are automatically saved whenever changes are made.

## Technologies Used

- React
- TypeScript
- React Context API (for state management)
- localStorage (for data persistence)
- CSS (for styling)

## License

[MIT License](LICENSE)
