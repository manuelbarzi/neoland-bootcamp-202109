import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import HomeIcon from "@mui/icons-material/Home";

import { useNavigate } from "react-router-dom";

export default function Menu({ signout }) {
  const [open, setOpen] = useState(false);

  const anchor = "right";

  const homeText = "Home";
  const unregisterText = "Unregister";
  const signoutText = "Sign out";

  const navigate = useNavigate();

  const toggleDrawer = () => (event) => {
    setOpen(!open);
  };



  const unregister = () => {
    navigate("/unregister");
  };

  const home = () => {
    navigate("/");
  };

  const list = (anchor) => (
    <Box
      sx={250}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        <ListItem button key={homeText} onClick={home}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={homeText} />
        </ListItem>
        <ListItem button key={unregisterText} onClick={unregister}>
          <ListItemIcon>
            <PersonRemoveIcon />
          </ListItemIcon>
          <ListItemText primary={unregisterText} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key={signoutText} onClick={signout}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary={signoutText} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer()}>
        <svg viewBox="0 0 100 80" width="30" height="20">
          <rect width="100" height="15"></rect>
          <rect y="30" width="100" height="15"></rect>
          <rect y="60" width="100" height="15"></rect>
        </svg>
      </Button>
      <Drawer anchor={anchor} open={open} onClose={toggleDrawer()}>
        {list(anchor)}
      </Drawer>
    </div>
  );
}
