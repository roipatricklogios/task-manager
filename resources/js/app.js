// require('./bootstrap'); //ROI

import { createApp } from 'vue';
import TaskManager from './components/TaskManager.vue';

createApp({
    components: {
        TaskManager,
    },
}).mount('#app');
