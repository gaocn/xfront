import { NavMenuItem } from '@/typings/nav';

const menuData: Array<NavMenuItem> = [
  { name: '导航一', order: 0, hidden: false, icon: 'message', path: '/home1', children: [] },
  {
    name: '导航二',
    icon: 'location',
    path: '/home2',
    order: 1,
    hidden: false,
    children: [
      { name: '2-1', icon: 'location', hidden: false, order: 1, path: '/401', children: [] },
      { name: '2-2', icon: 'location', hidden: false, order: 1, path: '/404', children: [] }
    ]
  },
  {
    name: '导航三',
    icon: 'location',
    path: '/home3',
    order: 2,
    hidden: false,
    children: [
      { name: '3-1', icon: 'setting', hidden: false, order: 1, path: '/405', children: [] },
      {
        name: '3-2',
        icon: 'location',
        path: '/home4',
        order: 1,
        hidden: false,
        children: [
          { name: '3-1-1', icon: 'location', hidden: false, order: 1, path: '/406', children: [] },
          { name: '3-1-2', icon: 'location', hidden: false, order: 1, path: '/407', children: [] }
        ]
      }
    ]
  },
  {
    name: '导航四',
    icon: 'location',
    path: '/home5',
    order: 2,
    hidden: false,
    children: [
      { name: '4-1', icon: 'setting', order: 1, path: '/408', children: [] },
      {
        name: '4-2',
        icon: 'location',
        path: '/home6',
        order: 1,
        children: [
          { name: '4-1-1', icon: 'location', order: 1, path: '/409', children: [] },
          { name: '4-1-2', icon: 'location', order: 1, path: '/400', children: [] }
        ]
      }
    ]
  }
];

export default menuData;
