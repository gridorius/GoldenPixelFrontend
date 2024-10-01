import {createApp} from 'vue';
import './assets/style/global.scss';
import HomeComponent from "@/components/HomeComponent.vue";
import {createRouter, createWebHistory} from "vue-router";
import App from "@/App.vue";
import PricesComponent from "@/components/PricesPageComponent.vue";
import WorkComponentPage from "@/components/WorkComponentPage.vue";


const routes = [
    {
        path: '/', component: HomeComponent,
        meta: {
            title: 'Превращаем идеи в реальность'
        }
    },
    {
        path: '/prices', component: PricesComponent,
        meta: {
            title: 'Прайс'
        }
    },
    {
        path: '/work', component: WorkComponentPage,
        meta: {
            title: 'О разработке'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from) {
        if (from.path !== to.path) {
            if (to.hash) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            el: to.hash,
                            behavior: 'smooth',
                        });
                    }, 700)
                });
            }
            return {left: 0, top: 0};
        } else {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
    }
})

createApp(App)
    .use(router)
    .mount('#app')
