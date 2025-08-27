import { createMemoryHistory, createRouter } from 'vue-router';
import IndexView from '@/pages/IndexView.vue';
import IconHome from '@/components/icons/IconHome.vue';
import IconCalendar from '@/components/icons/IconCalendar.vue';
import IconStudent from '@/components/icons/IconStudent.vue';
import IconTeacher from '@/components/icons/IconTeacher.vue';
import IconLesson from '@/components/icons/IconLesson.vue';
import IconParents from '@/components/icons/IconParents.vue';

const routes = [
  {
    path: '/',
    component: IndexView,
  },
];

export const sidebarRouteLinks = [
  {
    path: '/',
    title: 'Главная',
    icon: IconHome,
  },
  {
    path: '/calendar',
    title: 'Расписание',
    icon: IconCalendar,
  },
  {
    path: '/students',
    title: 'Ученики',
    icon: IconStudent,
  },
  {
    path: '/teachers',
    title: 'Преподаватели',
    icon: IconTeacher,
  },
  {
    path: '/lessons',
    title: 'Занятия',
    icon: IconLesson,
  },
  {
    path: '/parents',
    title: 'Родители',
    icon: IconParents,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
