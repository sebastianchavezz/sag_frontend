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
import ViewPartyDetails from './views/view-party-details'
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
import UserProfile from './views/user-profile.vue'
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
      name: 'ViewPartyDetails',
      path: '/view-party-details/:partyid',
      component: ViewPartyDetails,
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
      name: 'UserProfile',
      path: '/user-profile/:userid',
      component: UserProfile,
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
 router.beforeEach(async (to, from, next) => {
  if (
    // Make sure the user is authenticated
    !store.state.accessToken &&
    // Avoid an infinite redirect
    (to.name !== 'Login' && to.name !== 'Register' && to.name !== 'About')
  ) {
    // Redirect the user to the login page
    next({ name: 'Login' });
  } else {
    // Continue navigation
    next();
  }
});
export default router;