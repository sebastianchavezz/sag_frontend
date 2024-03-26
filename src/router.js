import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import store from './store'

import Login from './views/login'
import Register from './views/register'
import Home from './views/home'
import About from './views/about'
import Party from './views/party'
import Marketplace from './views/marketplace'
import CreateParty from './views/create-party'
import ViewParty from './views/view-party'
import GroupChat from './views/group-chat'
import ViewPresent from './views/view-present'
import ProductPage from './views/product-page'
import PrivateMessaging from './views/private-messaging'
import Profile from './views/profile'
import Post from './views/post'
import AddUserToParty from './views/add-user-to-party'
import Messages from './views/messages'
import Page from './views/page'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: Login,
    },
    {
      name: 'Register',
      path: '/register',
      component: Register,
    },
    {
      name: 'Home',
      path: '/home',
      component: Home,
      meta: { requiresAuth: true } // Add this meta field to indicate that this route requires authentication
    },
    {
      name: 'About',
      path: '/',
      component: About,
    },
    {
      name: 'Party',
      path: '/party',
      component: Party,
    },
    {
      name: 'Marketplace',
      path: '/marketplace',
      component: Marketplace,
    },
    {
      name: 'CreateParty',
      path: '/create-party',
      component: CreateParty,
    },
    {
      name: 'ViewParty',
      path: '/view-party',
      component: ViewParty,
    },
    {
      name: 'GroupChat',
      path: '/group-chat',
      component: GroupChat,
    },
    {
      name: 'ViewPresent',
      path: '/view-present',
      component: ViewPresent,
    },
    {
      name: 'ProductPage',
      path: '/product-page',
      component: ProductPage,
    },
    {
      name: 'PrivateMessaging',
      path: '/private-messaging',
      component: PrivateMessaging,
    },
    {
      name: 'Profile',
      path: '/profile',
      component: Profile,
    },
    {
      name: 'Post',
      path: '/post',
      component: Post,
    },
    {
      name: 'AddUserToParty',
      path: '/add-user-to-party',
      component: AddUserToParty,
    },
    {
      name: 'Messages',
      path: '/messages',
      component: Messages,
    },
    {
      name: 'Page',
      path: '/page',
      component: Page,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
});

export default router;
/* // Add navigation guard to check if the route requires authentication
router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the user is authenticated
    if (!checkIfUserIsAuthenticated()) {
      // User is not logged in, redirect to login page
      next({
        path: '/login',
        query: { redirect: to.fullPath } // Pass the current route as a query parameter to redirect after login
      });
    } else {
      // User is logged in, proceed to the requested route
      next();
    }
  } else {
    // If the route doesn't require authentication, proceed as usual
    next();
  }
});


// Function to check if the user is authenticated
function checkIfUserIsAuthenticated() {
  // Replace this with your actual authentication logic
  // For example, you can check if there is an access token in the store
  const accessToken = store.state.accessToken;
  return !!accessToken; // Return true if the user is authenticated, false otherwise
}
 */