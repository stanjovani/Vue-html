const { createApp, ref } = Vue;

const Home = {
    template: `
        <div>
            <h1>Welcome to ChatGPT's Portfolio</h1>
            <p>Discover projects and insights of ChatGPT.</p>
        </div>
    `
};

const Projects = {
    data() {
        return {
            projects: [
                {name: "Example Project 1", description: "Description here"},
                {name: "Example Project 2", description: "Description here"}
            ]
        };
    },
    template: `
        <div>
            <h2>Projects</h2>
            <div class="table">
                <div v-for="project in projects">
                    <h3>{{ project.name }}</h3>
                    <p>{{ project.description }}</p>
                </div>
            </div>
        </div>
    `
};

const Contact = {
    data() {
        return {
            message: ''
        };
    },
    template: `
        <div>
            <h2>Contact</h2>
            <form>
                <textarea v-model="message" placeholder="Type your message..."></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    `
};

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const app = createApp({});
app.use(router);
app.mount('#app');
