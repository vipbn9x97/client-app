import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Dashboard',
        icon: 'bx-home-circle',
        subItems: [
            // {
            //     id: 2,
            //     label: 'Dashboard',
            //     link: '/dashboard',
            //     parentId: 1
            // },
            {
                id: 3,
                label: 'Attendance Board',
                link: '/dashboards/attendance',
                parentId: 1
            }
            // {
            //     id: 4,
            //     label: 'Upload Master Data',
            //     link: '/dashboards/upload',
            //     parentId: 1
            // },
            // {
            //     id: 5,
            //     label: 'MENUITEMS.DASHBOARDS.LIST.BLOG',
            //     link: '/dashboards/blog',
            //     parentId: 1
            // },
        ]
    },
    {
        id: 6,
        label: 'Multiforce Control',
        icon: 'bx-tone',
        isUiElement: true,
        subItems: [
            {
                id: 7,
                label: 'Multiforce Main Page',
                link: '/multiforce/dashboard',
                parentId: 6
            },
            // {
            //     id: 8,
            //     label: 'List Multi Order',
            //     link: '/multiforce/list',
            //     parentId: 6
            // },
            {
                id: 9,
                label: 'Update Multi Ability',
                link: '/multiforce/ability',
                parentId: 6
            },
            {
                id: 10,
                label: 'List Multi Order',
                link: '/multiforce/list',
                parentId: 6
            },
            {
                id: 11,
                label: 'Multi Assy Board',
                link: '/multiforce/auto-arrange',
                parentId: 6
            },
            {
                id: 12,
                label: 'Upload Master Data',
                link: '/multiforce/upload',
                parentId: 6
            },
        ]
    },
    // {
    //     id: 24,
    //     label: 'Training',
    //     icon: 'bx-customize',
    //     subItems: [
    //         {
    //             id: 25,
    //             label: 'Training Basic',
    //             subItems: [
    //                 {
    //                     id: 120,
    //                     label: 'Andon',
    //                     link: '/training/basic/andon',
    //                     parentId: 25
    //                 },
    //             ]
    //         },
    //         {
    //             id: 26,
    //             label: 'Training Cell',
    //             subItems: [
    //                 {
    //                     id: 130,
    //                     label: 'Nhân viên',
    //                     link: '/training/cell/employee',
    //                     parentId: 26
    //                 },
    //                 {
    //                     id: 131,
    //                     label: 'Multi',
    //                     link: '/training/cell/multi',
    //                     parentId: 26
    //                 }
    //             ]
    //         },
    //         {
    //             id: 27,
    //             label: 'Training Course',
    //             subItems: [
    //                 {
    //                     id: 140,
    //                     label: 'course1',
    //                     link: '/training/course/course1',
    //                     parentId: 27
    //                 },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     id: 69,
    //     icon: 'bx-collection',
    //     label: 'PA',
    //     subItems: [
    //         {
    //             id: 92,
    //             label: 'Upload file',
    //             subItems: [
    //                 {
    //                     id: 93,
    //                     label: 'Upload ảnh thẻ',
    //                     link: '/pa/file/images',
    //                     parentId: 92
    //                 }
    //             ]
    //         }
    //     ]
    // },
    {
        id: 100,
        icon: 'bx-cog',
        label: 'Settings',
        subItems: [
            {
                id: 101,
                label: 'Multiforce Setting',
                link: '/settings/multiforce',
                parentId: 100
            }
        ]
    }
];

