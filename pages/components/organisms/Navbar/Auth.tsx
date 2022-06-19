import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { JWTPayloadTypes, UserTypes } from '../../../../services/data-types';

export default function AuthNavbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: '',
  });
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload : JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload : UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/${userFromPayload.avatar}`;
      setIsLogin(true);
      setUser(user);
    }
  }, []);
  const onLogOut = () => {
    Cookies.remove('token');
    router.push('/');
    setIsLogin(false);
  };
  if (!isLogin) {
    return (

      <li className="nav-item my-auto">
        <Link href="/sign-in">
          <a
            className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
            role="button"
          >
            Sign In
          </a>
        </Link>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto dropdown d-flex">
      <div className="vertical-line d-lg-block d-none" />
      <div>
        <Link href="/sign-in">
          <a
            className="dropdown-toggle ms-lg-40"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.avatar}
              className="rounded-circle"
              width="40"
              height="40"
              alt=""
            />
          </a>
        </Link>
        <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
          <li><a className="dropdown-item text-lg color-palette-2" href="/member">My Profile</a></li>
          <li><a className="dropdown-item text-lg color-palette-2" href="#">Wallet</a></li>
          <li>
            <a className="dropdown-item text-lg color-palette-2" href="#">Account Settings</a>
          </li>
          <li onClick={onLogOut}><a className="dropdown-item text-lg color-palette-2" href="#">Log Out</a></li>
        </ul>
      </div>
    </li>
  );
}
