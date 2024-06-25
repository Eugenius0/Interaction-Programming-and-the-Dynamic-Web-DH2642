export type NavbarState = {
  open: boolean;
  anchorElUser: null | HTMLElement;
  setAnchorElUser: (element: HTMLElement | null) => void;
  openUserMenu: () => void;
  closeUserMenu: () => void;
};
