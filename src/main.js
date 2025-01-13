import {createApp} from 'vue';
import './assets/main.scss';
import HomeComponent from "@/components/HomeComponent.vue";
import {createRouter, createWebHistory} from "vue-router";
import App from "@/App.vue";
import PricesComponent from "@/components/PricesPageComponent.vue";
import WorkComponentPage from "@/components/WorkComponentPage.vue";
import BitrixIntegrationPage from "@/components/BitrixIntegrationPage.vue";


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
    {
        path: '/bitrix', component: BitrixIntegrationPage,
        meta: {
            title: 'О CRM Bitrix24'
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
