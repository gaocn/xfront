import { NavMenuItem } from '@/typings/nav';

const menuData: Array<NavMenuItem> = [
  { name: '导航一', order: 0, icon: 'message', path: '/home1', children: undefined },
  {
    name: '导航二',
    icon: 'location',
    path: '/home2',
    order: 1,
    children: [
      { name: '2-1', icon: 'location', order: 1, path: '/401', children: null },
      { name: '2-2', icon: 'location', order: 1, path: '/404', children: null }
    ]
  },
  {
    name: '导航三',
    icon: 'location',
    path: '/home3',
    order: 2,
    children: [
      { name: '3-1', icon: 'setting', order: 1, path: '/401', children: null },
      {
        name: '3-2',
        icon: 'location',
        path: '/home',
        order: 1,
        children: [
          { name: '3-1-1', icon: 'location', order: 1, path: '/404', children: null },
          { name: '3-1-2', icon: 'location', order: 1, path: '/401', children: null }
        ]
      }
    ]
  },
  {
    name: '导航四',
    icon: 'location',
    path: '/home4',
    order: 2,
    children: [
      { name: '4-1', icon: 'setting', order: 1, path: '/401', children: null },
      {
        name: '4-2',
        icon: 'location',
        path: '/home',
        order: 1,
        children: [
          { name: '4-1-1', icon: 'location', order: 1, path: '/404', children: null },
          { name: '4-1-2', icon: 'location', order: 1, path: '/401', children: null }
        ]
      }
    ]
  }
];

export default menuData;
