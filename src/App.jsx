import './App.css'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

// Pages
import About from './pages/about'
import Home from './pages/home'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Profile, { profileLoader } from './pages/profiles/Profile'
import ProfilDetails, {
    profilDetailsLoader,
} from './pages/profiles/ProfilDetails'
import ProfilesError from './pages/profiles/ProfilesError'

// Layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import ProfileLayout from './layouts/ProfileLayout'

const RoutesFromElements = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
            <Route path="faq" element={<Faq />} />
            <Route path="contact" element={<Contact />} />
        </Route>
    </Route>
)
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="help" element={<HelpLayout />}>
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} />
            </Route>
            <Route
                path="profiles"
                element={<ProfileLayout />}
                errorElement={<ProfilesError />}
            >
                <Route index element={<Profile />} loader={profileLoader} />
                <Route
                    path=":id"
                    element={<ProfilDetails />}
                    loader={profilDetailsLoader}
                />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
