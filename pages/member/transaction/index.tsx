import React from 'react';
import Sidebar from '../../components/organisms/SIdebar';
import TransactionContent from '../../components/organisms/TransactionContent';

export default function memberTransaction() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="Transactions" />
      <TransactionContent />
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

  return {
    props: {},
  };
}
