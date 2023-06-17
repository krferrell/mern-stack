import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUserState } from '../features/user/userSlice';

const ProtectedRoute = ({ children }: { children: any }) => {
  const user = useSelector(selectUserState);
  console.log(user);
  if (!(user.email && user.userId)) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default ProtectedRoute;
