# Task Management Application

A simple task management application built with Vue.js for the frontend and Laravel for the backend. This application allows users to add, edit, delete, and view tasks, making it easy to manage your daily tasks efficiently.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new tasks with a title, description, due date, and priority level.
- Edit existing tasks.
- Delete tasks.
- View all tasks in a user-friendly interface.
- Responsive design for mobile and desktop.

## Technologies Used

- **Frontend**: Vue.js, Axios, HTML, CSS
- **Backend**: Laravel, PHP
- **Database**: MySQL
- **Development Tools**: Composer, npm

## Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd task-manager
   composer install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   npm install
   docker-compose up --build
   docker-compose exec app php artisan migrate **Optional

Video file is included -- you can check it out after cloning the system.
