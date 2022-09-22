import {FC, Fragment} from "react";
import {
    Container,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    Divider,
    Tabs,
    Tab,
    Grid,
} from "@mui/material";
/** Styles */
import {StyledAppBar, StyledToolbar, StyledLogo} from "./Home.styles";
/** Assets */
import AvatarMan from "assets/images/avatar.png";
import AvatarWoman from "assets/images/avatar-woman.png";
import useControllers from "controllers";
import useComponents from "views/components";

const Home: FC = (): JSX.Element => {
    /** Components */
    const {Table, Categories, Maintenance} = useComponents();

    /** Controllers */
    const {useScreenHooks} = useControllers();
    const {useHome} = useScreenHooks();
    const {
        anchorUser,
        session,
        tab,
        tableData,
        openMenuUser,
        closeMenuUser,
        logout,
        changeTab,
    } = useHome();

    return (
        <Fragment>
            <StyledAppBar position="relative">
                <Container maxWidth="xl">
                    <StyledToolbar disableGutters>
                        <StyledLogo src="https://web.smartquick.com.co/wp-content/uploads/2020/10/Logo-SmartQuick-Negro.png" />
                        <IconButton onClick={openMenuUser}>
                            <Avatar>
                                <img
                                    src={
                                        session.user?.gender &&
                                        session.user?.gender === "Male"
                                            ? AvatarMan
                                            : AvatarWoman
                                    }
                                />
                            </Avatar>
                        </IconButton>
                        <Menu
                            sx={{mt: "45px"}}
                            open={Boolean(anchorUser)}
                            anchorEl={anchorUser}
                            id="menu-appbar"
                            keepMounted
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            onClose={closeMenuUser}>
                            <MenuItem>
                                <div className="flex gap-4">
                                    <Avatar>
                                        <img
                                            src={
                                                session.user?.gender &&
                                                session.user?.gender === "Male"
                                                    ? AvatarMan
                                                    : AvatarWoman
                                            }
                                        />
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span className="font-bold">
                                            {session.user?.fullname &&
                                                session.user.fullname}
                                        </span>
                                        <span className="text-[#AAA]">
                                            {session.user?.role &&
                                                session.user.role.name}
                                        </span>
                                    </div>
                                </div>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={logout}>Cerrar Sesiòn</MenuItem>
                        </Menu>
                    </StyledToolbar>
                </Container>
            </StyledAppBar>
            {session?.user.role.name === "Administrator" ? (
                <Fragment>
                    <div className="flex justify-center">
                        <div className="w-[300px]">
                            <Tabs value={tab} onChange={changeTab}>
                                <Tab label="Tabla de atletas" />
                                <Tab label="Categorias" />
                            </Tabs>
                        </div>
                    </div>
                    <Grid sm={12} style={{overflow: "auto"}}>
                        {tab === 0 ? (
                            <Table items={tableData} />
                        ) : (
                            <Categories items={tableData} />
                        )}
                    </Grid>
                </Fragment>
            ) : (
                <Fragment>
                    <Maintenance />
                </Fragment>
            )}
        </Fragment>
    );
};

export default Home;
