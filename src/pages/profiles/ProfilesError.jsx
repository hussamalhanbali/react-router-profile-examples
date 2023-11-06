import { Link, useRouteError } from 'react-router-dom'

const ProfilesError = () => {
    const error = useRouteError()
    console.error(error)
    return (
        <div className="profiles-error">
            <h2>Error!</h2>
            <p>{error.message}</p>
            <Link to={'/profiles'}>Gå tillbaka Profilerna</Link>
        </div>
    )
}

export default ProfilesError
