import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as RouterLink } from 'react-router-dom';

import logo from "../assets/logo.gif";

export default function LogoBar() {
    const handleLocationClick = () => {
        // Действие при клике - открыть карту, определить местоположение и т.д.
        console.log("Открыть карту с геолокацией");
        // Например, открыть Яндекс Карты или Google Maps
        window.open("https://maps.yandex.ru/?text=Магадан улица речная 25а", "_blank");
    };

    return (
        <>
            {/* Первый уровень - прозрачный с логотипом по центру */}
            <AppBar
                elevation={0}
                sx={{
                    backdropFilter: "blur(30px)",
                    color: 'white',
                    top: 0,
                }}
            >
                <Toolbar sx={{
                    minHeight: {
                        sm: '56px !important', // Переопределяем медиа-запрос
                        md: '64px !important'
                    },
                }}>
                    <Box sx={{flex: 1}}/>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <Box
                            component={RouterLink}
                            to="/"
                            aria-label="Перейти на главную страницу"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                color: 'inherit',
                                textDecoration: 'none',
                                borderRadius: '12px',
                                px: 1,
                                py: 0.5,
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        >
                            <img src={logo} alt="logo" style={{height: 40}}/>
                            <Typography
                                sx={{
                                    fontSize: 20,
                                    fontWeight: 200,
                                    lineHeight: 1.1,
                                    whiteSpace: 'nowrap',
                                    display: {xs: "block", md: "block"}
                                }}
                            >
                                Наркологическая Клиника Вимас
                            </Typography>
                        </Box>
                        <IconButton
                            onClick={handleLocationClick}
                            sx={{
                                color: 'white',
                                fontSize: 18,
                                fontWeight: 100,
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }
                            }}
                        >
                            <LocationOnIcon/>
                            Магадан
                        </IconButton>
                    </Box>
                    <Box sx={{flex: 1}}/>
                </Toolbar>
            </AppBar>
            {/* Общий отступ для контента */}
        </>
    );
}
