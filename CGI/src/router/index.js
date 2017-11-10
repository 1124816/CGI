import Vue from 'vue';
import Router from 'vue-router';
import Climbs from '@/components/Climbs';
import Route from '@/components/Route';
import News from '@/components/News';
import Register from '@/components/Register';
import Settings from '@/components/Settings';
import Profile from '@/components/Friends';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'News',
      component: News
    },
    {
      path: '/climbs',
      name: 'Climbs',
      component: Climbs
    },
    {
      path: '/route',
      name: 'Route',
      component: Route
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
});
