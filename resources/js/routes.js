export default [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "dashboard" */ './views/dashboard/Index')
    },
    {
        path: '/department',
        component: () => import(/* webpackChunkName: "department" */ './views/department/DepartmentList')
    },
    {
        path: '/doctors',
        component: () => import(/* webpackChunkName: "doctors" */ './views/doctor/DoctorList')
    },
    {
        path: '/doctor/:id?',
        component: () => import(/* webpackChunkName: "doctor" */ './views/doctor/Doctor')
    },
    {
        path: '/patient',
        component: () => import(/* webpackChunkName: "patient" */ './views/patient/Index')
    },
    {
        path: '/patient/add',
        component: () => import(/* webpackChunkName: "patient-add" */ './views/patient/Create')
    },
    {
        path: '/patient/:id/edit',
        component: () => import(/* webpackChunkName: "patient-edit" */ './views/patient/Edit')
    },
    {
        path: '/appointment',
        component: () => import(/* webpackChunkName: "appointment" */ './views/appointment/Index')
    },
    {
        path: '/appointment/add',
        component: () => import(/* webpackChunkName: "appointment-add" */ './views/appointment/Create')
    },
    {
        path: '/appointment/:id/edit',
        component: () => import(/* webpackChunkName: "appointment-edit" */ './views/appointment/Edit')
    },
    {
        path: '/appointment/report',
        component: () => import(/* webpackChunkName: "appointment-report" */ './views/appointment/Report')
    },
    {
        path: '/prescription',
        component: () => import(/* webpackChunkName: "prescription" */ './views/prescription/Index')
    },
    {
        path: '/settings/acl',
        component: () => import(/* webpackChunkName: "acl" */ './views/settings/acl/Index')
    },
]