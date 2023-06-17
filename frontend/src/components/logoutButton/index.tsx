import { useDispatch } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { signOut } from "@firebase/auth";
import { auth } from '../../firebase';

const LogoutButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout);
    navigate('/login');
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
