<template>
    <div class="container">
        <h1>Task Management</h1>
        <form @submit.prevent="addTask" class="task-form">
            <input v-model="title" placeholder="Title" class="input-title">
            <textarea v-model="description" placeholder="Description" class="input-description"></textarea>
            <input v-model="due_date" type="date" class="input-date">
            <select v-model="priority" class="input-priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit" class="btn-add">Add Task</button>
        </form>

        <ul class="task-list">
            <li v-for="task in tasks" :key="task.id" class="task-item">
                <div class="task-header">
                    <h2 class="task-title">{{ task.title }}</h2>
                    <div class="task-actions">
                        <button @click="editTask(task.id)" class="btn-edit">Edit</button>
                        <button @click="deleteTask(task.id)" class="btn-delete">Delete</button>
                    </div>
                </div>
                <p class="task-description">{{ task.description }}</p>
                <p class="task-due-date">{{ task.due_date }}</p>
                <p class="task-priority">{{ task.priority }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            tasks: [],
            title: '',
            description: '',
            due_date: '',
            priority: 'low',
        };
    },
    mounted() {
        this.getTasks();
    },
    methods: {
        async getTasks() {
            let response = await axios.get('/api/tasks');
            this.tasks = response.data;
        },
        async addTask() {
            let response = await axios.post('/api/tasks', {
                title: this.title,
                description: this.description,
                due_date: this.due_date,
                priority: this.priority,
            });
            this.tasks.push(response.data);
            this.resetForm();
        },
        async editTask(id) {
            // pakilagay Edit dito
        },
        async deleteTask(id) {
            await axios.delete(`/api/tasks/${id}`);
            this.tasks = this.tasks.filter(task => task.id !== id);
        },
        resetForm() {
            this.title = '';
            this.description = '';
            this.due_date = '';
            this.priority = 'low';
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.task-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-title, .input-description, .input-date, .input-priority {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

textarea.input-description {
    height: 100px;
    resize: vertical;
}

.btn-add {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.btn-add:hover {
    background-color: #218838;
}

.task-list {
    list-style-type: none;
    padding: 0;
}

.task-item {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-title {
    margin: 0;
}

.task-actions {
    display: flex;
    gap: 10px;
}

.btn-edit, .btn-delete {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-edit {
    background-color: #ffc107;
    color: white;
}

.btn-edit:hover {
    background-color: #e0a800;
}

.btn-delete {
    background-color: #dc3545;
    color: white;
}

.btn-delete:hover {
    background-color: #c82333;
}

.task-description, .task-due-date, .task-priority {
    margin: 5px 0;
}
</style>
