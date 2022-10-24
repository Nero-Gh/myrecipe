import MenuIcon from "@mui/icons-material/Menu";
import { v3 } from "uuid";
import {
  AppBar,
  Box,
  styled,
  TextField,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { display } from "@mui/system";
import { React, useState } from "react";

const StyleToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const MenuBox = styled(Box)({
  display: "flex",
  gap: "5px",
  alignItems: "center",
});

const menu = [
  { Name: "Home", Link: "/" },
  { Name: "Recipes", Link: "/" },
  { Name: "About", Link: "/" },
  { Name: "Subcribe", Link: "/" },
];
function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <AppBar color="default" position="sticky" elevation={0}>
      <StyleToolBar>
        <Box flex={1}>
          <Typography variant="h5" color="brown">
            MyRecipe
          </Typography>
        </Box>
        <MenuBox flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
          {menu.map((item, index) => (
            <Typography variant="body2" color="brown" key={index}>
              {item.Name}
            </Typography>
          ))}
        </MenuBox>
        <Box>
          <TextField
            sx={{ display: { xs: "none", md: "flex" } }}
            variant="standard"
            label="Search Here..."
          />
        </Box>
        <MenuIcon sx={{ display: { xs: "flex", md: "none" } }} />
      </StyleToolBar>
      <Drawer
        anchor={top}
        open={openMenu}
        // onClose={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem>
            {menu.map((item, index) => (
              <Typography variant="body2" color="brown" key={index}>
                {item.Name}
              </Typography>
            ))}
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
