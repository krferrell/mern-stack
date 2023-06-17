import { useDispatch } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout);
    navigate('/login');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
