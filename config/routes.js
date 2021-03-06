export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BlankLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            routes: [
              {
                path: '/',
                redirect: '/statistics/general-statistics',
              },         
              {
                path: '/statistics',
                name: 'statistics',
                icon: 'table',
                routes: [
                  {
                    name: 'list.general-list',
                    path: '/statistics/general-statistics',
                    component: './Statistics/GeneralStatistics',
                  },
                  {
                    name: 'list.user-list',
                    path: '/statistics/user-statistics',
                    component: './Statistics/UserStatistics',
                  },
                  {
                    name: 'list.goods-list',
                    path: '/statistics/goods-statistics',
                    component: './Statistics/GoodsStatistics',
                  },
                ],               
              },                                                        
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
