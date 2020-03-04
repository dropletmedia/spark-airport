const routes = [{
    path: '/',
    name: 'home',
    component: require('./components/home.vue').default,
  },
  {
    path: '/help-faqs',
    name: 'help',
    component: require('./components/help.vue').default,
  },
  {
    path: '/terms-and-conditions',
    name: 'terms',
    component: require('./components/terms.vue').default,
  },
  {
    path: '*',
    redirect: {
      name: 'home',
    },
  },
]

export default routes