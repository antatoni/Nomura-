import { useContext } from 'react';
import { Link } from 'react-router';
import { SessionContext } from '../contexts/SessionStorage';
import { supabase } from '../database/supabase';

const Header = () => {
  const session = useContext(SessionContext);

  const handleLogOut = async () => {
    supabase.auth.signOut();
    console.log(session);
  };

  return (
    <>
      <div className="flex justify-between">
        <div>
          <img src="" alt="Page logo" />
        </div>

        {!session ? (
          <div className="flex gap-4">
            <Link to={'/register'}>
              <button>Register</button>
            </Link>

            <Link to={'/login'}>
              <button>Login</button>
            </Link>
          </div>
        ) : (
          <div className="flex gap-4">
            <button onClick={() => handleLogOut()}>Logout</button>
            <Link to={'/dashboard'}>
              <button>Dashboard</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
