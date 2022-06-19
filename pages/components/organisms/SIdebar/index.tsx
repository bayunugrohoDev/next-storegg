import React from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Profile from './Profile';
import MenuItem from './MenuItem';

interface sidebarProps {
    activeMenu : 'Overview' | 'Transactions' | 'Settings';
}
export default function Sidebar(props : sidebarProps) {
  const { activeMenu } = props;
  const router = useRouter();
  const onLogOut = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem href="/member" title="Overview" icon="ic-menu-overview" active={activeMenu === 'Overview'} />
          <MenuItem href="/member/transaction" title="Transactions" icon="ic-menu-transactions" active={activeMenu === 'Transactions'} />
          <MenuItem href="/member" title="Card" icon="ic-menu-card" />
          <MenuItem href="/member" title="Rewards" icon="ic-menu-rewards" />
          <MenuItem href="/member/edit-profile" title="Settings" icon="ic-menu-settings" active={activeMenu === 'Settings'} />
          <MenuItem onClick={onLogOut} title="Log Out" icon="ic-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>

  );
}
