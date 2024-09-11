# Chart Project

## Jonathan Weber

# jonathantweber@gmail.com

## Overview

This project is a web application that displays various types of charts using data fetched from a Django backend. The frontend is built with Next.js, TypeScript, Redux, and styled with Tailwind CSS and Shadcn. The application uses Recharts and ECharts to visualize different types of financial data.

## Setup and Running the Application

### Backend (Django)

1. **Install Dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

2. **Apply Migrations:**

    ```bash
    python manage.py migrate
    ```

3. **Run the Server:**

    ```bash
    python manage.py runserver
    ```

### Frontend (Next.js)

1. **Install Dependencies:**

    ```bash
    npm install
    ```

2. **Run the Development Server:**

    ```bash
    npm run dev
    ```


## Libraries and Tools Used

### Frontend:

- **Next.js** for server-side rendering and routing.
- **TypeScript** for type safety.
- **Tailwind CSS** for styling.
- **Recharts** for general charts.
- **ECharts** for candlestick charts.
- **Redux** for state management.
- **Shadcn** for UI components.

### Backend:

- **Django** for building the REST API.
- **Django Rest Framework** for creating RESTful APIs.
- **Django CORS Headers** to handle Cross-Origin Resource Sharing.
- Python dependencies listed in `requirements.txt`.

## Approach and Thought Process

### Backend Setup:

- Created a Django project with Django Rest Framework to quickly set up an API for chart data.
- Configured necessary CORS settings to allow frontend requests.

### Frontend Setup:

- Initialized a Next.js project with TypeScript for type safety and server-side rendering.
- Styled the application using Tailwind CSS for a responsive and modern UI.
- Used Redux for managing state across different routes.
- Implemented charting with Recharts and ECharts. Initially only used Recharts but the Candlestick Chart proved difficult so I used ECharts for that.

### Challenges:

- Faced issues with Docker setup towards the end and couldn't resolve them in time.
- Charting libraries presented some learning curves, especially for complex chart types like candlestick charts.

## Notes

- The styling is functional but could be further improved with additional time and knowledge of charting libraries.
- Docker setup remains incomplete due to time constraints and errors encountered.

## Future Improvements

- Improve styling for a more polished look.
- Resolve Docker setup issues for easier deployment.
- Explore more advanced features of charting libraries.
- Add Unit Tests and Integration Tests.
