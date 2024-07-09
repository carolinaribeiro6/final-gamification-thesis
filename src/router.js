import { createWebHistory, createRouter } from 'vue-router';

import MyWork from './components/work/MyWork.vue'
import TablePage from './components/projects/TablePage.vue'
import HistoryPage from './components/account/HistoryPage.vue'
import RecordsPage from './components/work/RecordsPage.vue'
import TimePage from './components/work/TimePage.vue'
import LogsPage from './components/work/LogsPage.vue'
import RewardsPage from './components/iogamify/RewardsPage.vue'
import AwardsPage from './components/iogamify/AwardsPage.vue'
import RulesPage from './components/RulesPage.vue'
import MyAccount from './components/account/MyAccount.vue'
import ProjectOwner from './components/work/ProjectOwner.vue'
import ScrumMaster from './components/work/ScrumMaster.vue'
import ChartPage from './components/projects/ChartPage.vue'
import SalaryPage from './components/account/SalaryPage.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        { path: '/mywork', component: MyWork},
        { path: '/table', component: TablePage},
        { path: '/history', component: HistoryPage},
        { path: '/records', component: RecordsPage},
        { path: '/time', component: TimePage},
        { path: '/logs', component: LogsPage},
        { path: '/rewards', component: RewardsPage},
        { path: '/awards', component: AwardsPage},
        { path: '/rules', component: RulesPage},
        { path: '/myaccount', component: MyAccount},
        { path: '/po', component: ProjectOwner},
        { path: '/sm', component: ScrumMaster},
        { path: '/chart', component: ChartPage},
        { path: '/salary', component: SalaryPage}
    ],
})

export default router;