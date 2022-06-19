import React from 'react';
import jwtDecode from 'jwt-decode';
import { HistoryTransactionTypes, JWTPayloadTypes, UserTypes } from '../../../services/data-types';
import TransactionDetailContent from '../../components/organisms/TransactionDetailContent';
import { getTransactionDetail } from '../../../services/member';

interface TransactionDetailProps {
  transactionDetail : HistoryTransactionTypes
}

export default function Detail(props : TransactionDetailProps) {
  const { transactionDetail } = props;
  return (
    (
      <section className="transactions-detail overflow-auto">
        {/* <Sidebar activeMenu="Transactions" /> */}
        <TransactionDetailContent data={transactionDetail} />
      </section>
    )
  );
}

interface GetServerSideProps {
  req : {
    cookies : {
      token : string
    }
  },
  params : {
    idTrx : string
  }
}

export async function getServerSideProps({ req, params } : GetServerSideProps) {
  const { idTrx } = params;
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
  const response = await getTransactionDetail(idTrx, jwtToken);
  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
