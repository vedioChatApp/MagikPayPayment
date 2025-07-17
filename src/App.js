import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'

// We use those styles to show code examples, you should remove them in your application.
import './scss/examples.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const AdminDashboard = React.lazy(() => import('./views/pages/AdminDashbord/AdminDashbords'))
// const StaffManagementDashboard = React.lazy(() =>import("./views/pages/staff-management/StaffManagementDashboard"));
const ApiUserDashboard = React.lazy(() =>
  import('./views/pages/api-user-Mangerdashboard/ApiUserDashboard')
)
const ApiActivityLog = React.lazy(() =>
  import('./views/pages/AdminDashbord/ApiActivityLog')
)
const ApiUserView = React.lazy(() =>
  import('./views/pages/api-user-Mangerdashboard/ApiUserView')
)
const BalanceLog = React.lazy(() =>
  import('./views/pages/api-user-Mangerdashboard/BalanceLog')
)

const ChargeManagement = React.lazy(() =>
  import('./views/pages/api-user-Mangerdashboard/ChargeManagement')
)
const EditAPI = React.lazy(() =>
  import('./views/pages/api-user-Mangerdashboard/EditAPI')
)
const RecentLoginActivies = React.lazy(() =>
  import('./views/pages/api-user-Mangerdashboard/RecentLoginActivies')
)

const ChangePassword = React.lazy(() =>
  import('./views/pages/api-user-Mangerdashboard/ChangePassword')
)

const AddIPAddress = React.lazy(() =>
  import('./views/pages/ SiteManagement/AddIPAddress')
)

const Apifundload = React.lazy(() =>
  import('./views/pages/api-user-Mangerdashboard/Apifundload')
)








// import StaffManagementDashboard from './views/pages/staff-management/StaffManagementDashboard';
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/AdminDashboard" name="AdminDashboard" element={<AdminDashboard />} />
          {/* <Route path="/staff-management" element={<StaffManagementDashboard />} /> */}
          <Route exact path="/api-user-dashboard" name="API User Dashboard"element={<ApiUserDashboard />}/>
 <Route exact path="/ApiActivityLog" name="Api ActivityLog"element={<ApiActivityLog />}/>
  <Route exact path="/ApiUserView" name="Api ActivityLog"element={<ApiUserView />}/>
    <Route exact path="/BalanceLog" name="Api ActivityLog"element={<BalanceLog />}/>
       <Route exact path="/ChargeManagement" name="Api ActivityLog"element={<ChargeManagement />}/>
            <Route exact path="/EditAPI" name="Api ActivityLog"element={<EditAPI />}/>
                        <Route exact path="/RecentLoginActivies" name="Recent Login Activies"element={<RecentLoginActivies />}/>
             <Route exact path="/ChangePassword" name="ChangePassword"element={<ChangePassword />}/>
              <Route exact path="/AddIPAddress" name="Add IP Address"element={<AddIPAddress />}/>
              <Route exact path="/Apifundload" name="Add IP Address"element={<Apifundload />}/>
       
    
 



          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
