import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '@/pages/home/index.tsx',
          title:'首页'
        },
        {
          path: '/order',
          component: '@/pages/order/index.tsx',
          title:'订单'
        },
        {
          path: '/user',
          component: '@/pages/user/index.tsx',
          title:'用户'
        },
      ]
    },
  ],
  fastRefresh: {},
});
