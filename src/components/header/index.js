import { Pets, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Typography,
  Box,
  Toolbar,
  InputBase,
  Badge,
  styled,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {useShareState} from "~/services/SharedStateService";
import {authService, userService} from "~/services";
import {useMutation} from "@tanstack/react-query";
import toast from "react-hot-toast";

const Header = () => {
  const [open, setOpen] = useState(false);
  const {signInState, setSignInStateEvent, setPointStateEvent} = useShareState();
  const navigate = useNavigate();
  const handleToggle = () => {
    setOpen(!open);
  };

  const StyledToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    background: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  const handleLogout = async () => {
    logout.mutate();
  }
  const logout = useMutation(async (data) => authService.logout(data),
      {
        onSuccess: (data) => {
          toast.success("Đăng Xuất thành công");
          //handleUserLogin();
         // navigate(`/`)
          console.log(signInState)
        },
        onError: (err) => {
          console.log("Mutation failed", err);
          toast.error("Đăng xuất không thành công")
          console.log(signInState)
        },
      });
  const handleUserLogin = async () => {
    //Lấy data user login
    const res = await userService.getUserSignIn();
    console.log(res)
    console.log(res.status)
    console.log("data: "+res.data)
    //set state login
    if (res.data != ''| res.data!= null){
      setSignInStateEvent(true);
      //set state point
      if(res.data.point >0) setPointStateEvent(true);
    }

    console.log(signInState)
  }
  useEffect(() => {
    handleUserLogin().then({

    });
  }, );

  return (
    <AppBar position="sticky">
      <StyledToobar>
        <Typography
          variant="h6"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          ExchangeBook
        </Typography>
        <Pets
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://source.unsplash.com/random"
            onClick={handleToggle}
          />
        </Icons>
        <UserBox onClick={handleToggle}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://source.unsplash.com/random"
          />
        </UserBox>
        <Menu
          id="menu"
          aria-aria-labelledby="demo"
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem
            onClick={() => navigate("/management/profile", { replace: true })}
          >
            Profile
          </MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </StyledToobar>
    </AppBar>
  );
};

export default Header;
