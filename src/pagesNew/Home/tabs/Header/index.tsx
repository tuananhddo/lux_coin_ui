import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import menus from "../../../../config/constants/menu";
import {useNavigate} from "react-router-dom";

const pages = ['Introduction', 'Ecosystem', 'Invest', 'Tokenomics', 'Roadmap', 'Partners'];
const settings = ['Introduction', 'Ecosystem', 'Invest', 'Tokenomics', 'Roadmap', 'Partners'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const navigate = useNavigate();

    const handleCloseNavMenu = (e) => {
        console.log(e)
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*<AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>*/}
                    <SvgIcon viewBox="0 0 5120 1024"  sx={{ fontSize: 80, color: "yellow" }}>
                        <path d="M230.997333 512L116.053333 626.986667 0 512l116.010667-116.010667L230.997333 512zM512 230.997333l197.973333 197.973334 116.053334-115.968L512 0 197.973333 314.026667l116.053334 115.968L512 230.997333z m395.989333 164.992L793.002667 512l116.010666 116.010667L1024.981333 512l-116.992-116.010667zM512 793.002667l-197.973333-198.997334-116.053334 116.010667L512 1024l314.026667-314.026667-116.053334-115.968L512 793.002667z m0-165.973334l116.010667-116.053333L512 396.032 395.989333 512 512 626.986667z m1220.010667 11.946667v-1.962667c0-75.008-40.021333-113.024-105.002667-138.026666 39.978667-21.973333 73.984-58.026667 73.984-121.002667v-1.962667c0-88.021333-70.997333-145.024-185.002667-145.024h-260.992v561.024h267.008c126.976 0.981333 210.005333-51.029333 210.005334-153.002666z m-154.026667-239.957333c0 41.984-34.005333 58.965333-89.002667 58.965333h-113.962666V338.986667h121.984c52.010667 0 80.981333 20.992 80.981333 58.026666v2.005334z m31.018667 224c0 41.984-32.981333 61.013333-87.04 61.013333h-146.944v-123.050667h142.976c63.018667 0 91.008 23.04 91.008 61.013334v1.024z m381.994666 169.984V230.997333h-123.989333v561.024h123.989333v0.981334z m664.021334 0V230.997333h-122.026667v346.026667l-262.997333-346.026667h-114.005334v561.024h122.026667v-356.010666l272 356.992h104.96z m683.946666 0L3098.026667 228.010667h-113.962667l-241.024 564.992h127.018667l50.986666-125.994667h237.013334l50.986666 125.994667h130.005334z m-224.981333-235.008h-148.992l75.008-181.973334 73.984 181.973334z m814.037333 235.008V230.997333h-122.026666v346.026667l-262.997334-346.026667h-114.005333v561.024h122.026667v-356.010666l272 356.992h104.96z m636.970667-91.008l-78.976-78.976c-44.032 39.978667-83.029333 65.962667-148.010667 65.962666-96 0-162.986667-80-162.986666-176v-2.986666c0-96 67.968-174.976 162.986666-174.976 55.978667 0 100.010667 23.978667 144 62.976l78.976-91.008c-51.968-50.986667-114.986667-86.997333-220.970666-86.997334-171.989333 0-292.992 130.986667-292.992 290.005334V512c0 160.981333 122.965333 288.981333 288 288.981333 107.989333 1.024 171.989333-36.992 229.973333-98.986666z m527.018667 91.008v-109.994667h-305.024v-118.016h265.002666v-109.994667h-265.002666V340.992h301.013333V230.997333h-422.997333v561.024h427.008v0.981334z" p-id="2935"/>
                    </SvgIcon>

                    {/*<Typography*/}
                    {/*    variant="h6"*/}
                    {/*    noWrap*/}
                    {/*    component="a"*/}
                    {/*    href="/"*/}
                    {/*    sx={{*/}
                    {/*        mr: 2,*/}
                    {/*        display: {xs: 'none', md: 'flex'},*/}
                    {/*        fontFamily: 'monospace',*/}
                    {/*        fontWeight: 700,*/}
                    {/*        letterSpacing: '.3rem',*/}
                    {/*        color: 'inherit',*/}
                    {/*        textDecoration: 'none',*/}
                    {/*        backgroundImage: 'url(https://833250.smushcdn.com/1694534/wp-content/uploads/2020/05/Frame-45we-e1589812448384.png?lossy=1&strip=1&webp=1)',*/}
                    {/*        backgroundSize: "cover"*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*</Typography>*/}

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {menus.map((page) => (
                            <Button

                                key={page.label}
                                onClick={() => {
                                    navigate(page.link)
                                }}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    ':hover': {
                                        color: 'yellow',
                                    }
                                }}
                            >
                                {page.label}
                            </Button>
                        ))}
                    </Box>

                    {/*<Box sx={{ flexGrow: 0 }}>*/}
                    {/*  <Tooltip title="Open settings">*/}
                    {/*    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>*/}
                    {/*      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
                    {/*    </IconButton>*/}
                    {/*  </Tooltip>*/}
                    {/*  /!*<Menu*!/*/}
                    {/*  /!*  sx={{ mt: '45px' }}*!/*/}
                    {/*  /!*  id="menu-appbar"*!/*/}
                    {/*  /!*  anchorEl={anchorElUser}*!/*/}
                    {/*  /!*  anchorOrigin={{*!/*/}
                    {/*  /!*    vertical: 'top',*!/*/}
                    {/*  /!*    horizontal: 'right',*!/*/}
                    {/*  /!*  }}*!/*/}
                    {/*  /!*  keepMounted*!/*/}
                    {/*  /!*  transformOrigin={{*!/*/}
                    {/*  /!*    vertical: 'top',*!/*/}
                    {/*  /!*    horizontal: 'right',*!/*/}
                    {/*  /!*  }}*!/*/}
                    {/*  /!*  open={Boolean(anchorElUser)}*!/*/}
                    {/*  /!*  onClose={handleCloseUserMenu}*!/*/}
                    {/*  /!*>*!/*/}
                    {/*  /!*  {settings.map((setting) => (*!/*/}
                    {/*  /!*    <MenuItem key={setting} onClick={handleCloseUserMenu}>*!/*/}
                    {/*  /!*      <Typography textAlign="center">{setting}</Typography>*!/*/}
                    {/*  /!*    </MenuItem>*!/*/}
                    {/*  /!*  ))}*!/*/}
                    {/*  /!*</Menu>*!/*/}
                    {/*</Box>*/}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
