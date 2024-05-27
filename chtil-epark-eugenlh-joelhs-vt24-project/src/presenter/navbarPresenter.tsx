import { observer } from "mobx-react-lite";
import { auth } from "../firebaseConfig";
import { Model } from "../model/Model";
import NavbarView from "../views/ui/navbarView";

const NavbarPresenter = observer(function (props: { model: Model }) {
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    props.model.navbarState.setAnchorElUser(event.currentTarget);
    props.model.navbarState.openUserMenu();
  };

  const handleCloseUserMenu = () => {
    props.model.navbarState.setAnchorElUser(null);
    props.model.navbarState.closeUserMenu();
  };

  const handleSignout = () => {
    props.model.loginState.handleLogout();
    handleCloseUserMenu();
  };

  const pages = ["Home", "Leaderboard"];

  return (
    <NavbarView
      user={auth.currentUser}
      anchorElUser={props.model.navbarState.anchorElUser}
      handleOpenUserMenu={handleOpenUserMenu}
      handleCloseUserMenu={handleCloseUserMenu}
      open={props.model.navbarState.open}
      pages={pages}
      handleSignout={handleSignout}
    />
  );
});

export default NavbarPresenter;
