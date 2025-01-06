## Project Structure

The project is divided into two main parts:

### Frontend

The frontend is a React application located in the `frontend` directory. It includes the following main components:

- `App.js`: The main component that handles the state and renders other components.
- `Form.js`: A component for adding new tasks.
- `TodoList.js`: A component that displays the list of tasks.
- `Task.js`: A component that represents a single task.
- `Stats.js`: A component that displays statistics about the tasks.

### Backend

The backend is a simple PHP API located in the `backend` directory. It includes the following files:

- `index.php`: The main API file that handles CRUD operations for tasks.
- `tasks.json`: A JSON file that stores the tasks.

## API Endpoints

The backend provides the following API endpoints:

- `GET /`: Retrieves all tasks.
- `POST /`: Adds a new task.
- `PUT /`: Updates a task's completion status.
- `DELETE /`: Deletes a task.

## Running the Project

To run the project, follow these steps:

1. Navigate to the `frontend` directory and install the dependencies:

```sh
cd frontend
npm install
```

2. Start the frontend development server:

```sh
npm start
```

3. Navigate to the `backend` directory and start a PHP server:

```sh
cd backend
php -S localhost:8000
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## License

This project is licensed under the MIT License.
