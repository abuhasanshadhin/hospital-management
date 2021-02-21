export default [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "dashboard" */ './pages/dashboard/Index')
    },
    {
        path: '/department',
        component: () => import(/* webpackChunkName: "department" */ './pages/department/DepartmentList')
    },
    {
        path: '/doctors',
        component: () => import(/* webpackChunkName: "doctors" */ './pages/doctor/DoctorList')
    },
    {
        path: '/doctor/:id?',
        component: () => import(/* webpackChunkName: "doctor" */ './pages/doctor/Doctor')
    },
    {
        path: '/patients',
        component: () => import(/* webpackChunkName: "patients" */ './pages/patient/PatientList')
    },
    {
        path: '/patient/:id?',
        component: () => import(/* webpackChunkName: "patient" */ './pages/patient/Patient')
    },
    {
        path: '/appointment',
        component: () => import(/* webpackChunkName: "appointment" */ './pages/appointment/Index')
    },
    {
        path: '/appointment/add',
        component: () => import(/* webpackChunkName: "appointment-add" */ './pages/appointment/Create')
    },
    {
        path: '/appointment/:id/edit',
        component: () => import(/* webpackChunkName: "appointment-edit" */ './pages/appointment/Edit')
    },
    {
        path: '/appointment/report',
        component: () => import(/* webpackChunkName: "appointment-report" */ './pages/appointment/Report')
    },
    {
        path: '/prescription',
        component: () => import(/* webpackChunkName: "prescription" */ './pages/prescription/Index')
    },
    {
        path: '/settings/acl',
        component: () => import(/* webpackChunkName: "acl" */ './pages/settings/acl/Index')
    },
]
