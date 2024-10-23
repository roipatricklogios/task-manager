<template>
    <div>
        <!-- Adjust nyo sa h2 if needed medyo malaki -->
        <h1>Task Management</h1> 
        <form @submit.prevent="addTask">
            <input v-model="title" placeholder="Title">
            <textarea v-model="description" placeholder="Description"></textarea>
            <input v-model="due_date" type="date">
            <select v-model="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>

        <ul>
            <li v-for="task in tasks" :key="task.id">
                <h2>{{ task.title }}</h2>
                <p>{{ task.description }}</p>
                <p>{{ task.due_date }}</p>
                <p>{{ task.priority }}</p>
                <button @click="editTask(task.id)">Edit</button>
                <button @click="deleteTask(task.id)">Delete</button>
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
/* Add your styles here */
</style>
