import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/user/userSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleAuthWithGoogle } from '../../utils/googleAuth';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { email, uid: userId } = userCredential.user;
        dispatch(
          setUser({
            email,
            userId,
          })
        );
      })
      .then(() => navigate('/home'))
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.error(error);
        // ..
      });
  };

  return (
    <div>
      <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => handleAuthWithGoogle(navigate, dispatch)}>Login With Google</button>
    </div>
  );
};

export default Login;
