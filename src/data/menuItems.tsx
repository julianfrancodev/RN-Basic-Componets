import { MenuItem } from '../interfaces/appInterfaces';


export const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    },
    {
        name: 'Switch',
        icon: 'toggle-outline',
        component: 'SwitchScreen'
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertsScreen'
    },
    {
        name: 'TextInputs',
        icon: 'text-outline',
        component: 'TextInputScreen'
    },
    {
        name: 'Pull to Refresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen'
    },
    {
        name: 'Section List',
        icon: 'list-outline',
        component: 'SectionListScreen'
    },
    {
        name: 'Modals',
        icon: 'albums-outline',
        component: 'ModalScreen'
    },
    {
        name: 'Infinite Scroll',
        icon: 'layers-outline',
        component: 'InfiniteScrollScreen'
    },
    {
        name: 'Slides',
        icon: 'albums-outline',
        component: 'SlidesScreen'
    },
    {
        name: 'Theme',
        icon: 'pencil-outline',
        component: 'ChangeThemeScreen'
    },
]