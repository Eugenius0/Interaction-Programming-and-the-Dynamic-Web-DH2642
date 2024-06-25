import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logoImage from "./../../../static/logos/android-chrome-512x512.png";
import { colorPalette } from "../../globals";
import "firebase/auth";
import { User } from "firebase/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import ListItemIcon from "@mui/material/ListItemIcon";

export type NavbarViewProps = {
  user: User | null;
  anchorElUser: HTMLElement | null;
  open: boolean;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
  handleSignout: () => void;
  pages: string[];
};

function NavbarView(props: NavbarViewProps) {
  function renderPageLinks(page: string) {
    return (
      <Link
        style={{ textDecoration: "none" }}
        key={page}
        to={`/${page.toLowerCase()}`}
      >
        <Typography
          sx={{
            transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
              color: colorPalette.secondary,
            },
            color: colorPalette.white,
            textDecoration: "none",
          }}
        >
          {page}
        </Typography>
      </Link>
    );
  }

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: colorPalette.primary,
        paddingY: "0.5rem",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box>
        <Link to={"/home"}>
          <Avatar
            alt="Logo"
            src={logoImage}
            sx={{
              width: "3.5rem",
              height: "3.5rem",
              transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </Link>
      </Box>

      <Box sx={{ display: "flex", gap: "2rem" }}>
        {props.pages.map(renderPageLinks)}
      </Box>

      <Box>
        <Tooltip title="Open settings">
          <IconButton onClick={props.handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar src={props.user?.photoURL || undefined} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "4rem" }}
          id="menu-appbar"
          anchorEl={props.anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={props.open}
          onClose={props.handleCloseUserMenu}
        >
          <MenuItem disabled={true}>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            {props.user?.email}
          </MenuItem>
          <MenuItem onClick={props.handleSignout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </AppBar>
  );
}

export default NavbarView;
