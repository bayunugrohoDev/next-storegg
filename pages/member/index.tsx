import React from 'react';
import jwtDecode from 'jwt-decode';
import { JWTPayloadTypes, UserTypes } from '../../services/data-types';
import OverviewContent from '../components/organisms/OverviewContent';
import Sidebar from '../components/organisms/SIdebar';

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="Overview" />
      <OverviewContent />
    </section>

  );
}

interface GetServerSideProps {
  req : {
    cookies : {
      token : string
    }
  }
}

export async function getServerSideProps({ req } : GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii'); // ini fungsi seperti atob yang ada di client side.tapi ini untuk server side
  const payload : JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload : UserTypes = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;

  return {
    props: {
      user: userFromPayload,
    },
  };
}
