import { useAuth } from '../context/AuthContext'
import '../styles/Profile.scss'

const Profile = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-status offline">
            <span className="status-indicator"></span>
            Нет активного профиля
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-info">
          <h2 className="profile-name">
            {user?.firstName} {user?.lastName}
          </h2>
          <p className="profile-email">{user?.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile