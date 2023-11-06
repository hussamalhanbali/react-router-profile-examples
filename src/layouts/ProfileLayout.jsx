import { Outlet } from 'react-router-dom'

export default function ProfileLayout() {
    return (
        <div className="profile-layout">
            <h2>Profile</h2>
            <p>Ta en titt på vilken profiler som är redo för jobb!</p>
            <Outlet />
        </div>
    )
}
