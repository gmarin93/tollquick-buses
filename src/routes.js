/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/TableList.jsx";
import Maps from "views/Maps.jsx";
import Upgrade from "views/Upgrade.jsx";
import UserPage from "views/UserPage.jsx";
import UserEdit from "views/UserEdit.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Principal",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
    visible:true
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "design_image",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "location_map-big",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "ui-1_bell-53",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  {
    path: "/user-page",
    name: "Registro de empresas",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
    visible:true
  },
  {
    path: "/user-edit/:empresaid",
    name: "Edición de empresas",
    icon: "users_single-02",
    component: UserEdit,
    layout: "/admin",
    visible:false
  },
  {
    path: "/extended-tables",
    name: "Catálogo de empresas",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
    visible:true
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "design-2_ruler-pencil",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "objects_spaceship",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
  // {
  //   path: "/dashboard",
  //   name: "Principal",
  //   icon: "pe-7s-graph",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user",
  //   name: "Registro Empresas",
  //   icon: "pe-7s-user",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Pagos",
  //   icon: "fa fa-credit-card",
  //   component: TableList,
  //   layout: "/admin"
  // },
];
export default dashRoutes;
