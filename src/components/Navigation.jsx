import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Box,
    Badge,
    Chip,
    Divider,
    Typography,
    Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import HealingIcon from "@mui/icons-material/Healing";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmergencyIcon from "@mui/icons-material/Emergency";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const mobileQuickActions = [
    {
        label: "Главная",
        description: "Вернуться на главную страницу",
        icon: <HomeIcon />,
        link: "/",
    },
    {
        label: "Адрес клиники",
        description: "Магадан, улица Речная 25а",
        icon: <LocationOnIcon />,
        link: "/about",
    },
];

const navItems = [
    {
        label: "Главная",
        id: "home",
        icon: <HomeIcon />,
        link: "/",
    },
    {
        label: "Алкоголизм",
        id: "alcoholism",
        icon: <LocalHospitalIcon />,
        subItems: [
            { name: "Вывод из запоя", link: "/alcoholism/withdrawal" },
            { name: "Кодирование", link: "/alcoholism/coding" },
            { name: "Капельницы", link: "/alcoholism/iv" },
            { name: "Реабилитация", link: "/alcoholism/rehabilitation" }
        ]
    },
    {
        label: "Наркомания",
        id: "addiction",
        icon: <MedicalServicesIcon />,
        subItems: [
            { name: "Детоксикация", link: "/addiction/detoxification" },
            { name: "УБОД", link: "/addiction/ubod" },
            { name: "Реабилитация", link: "/addiction/rehabilitation" },
            { name: "Социальная адаптация", link: "/addiction/social-adaptation" }
        ]
    },
    {
        label: "Реабилитация",
        id: "rehab",
        icon: <HealingIcon />,
        subItems: [
            { name: "Стационар", link: "/rehabilitation/inpatient" },
            { name: "Дневной стационар", link: "/rehabilitation/day-hospital" },
            { name: "Амбулаторно", link: "/rehabilitation/outpatient" },
            { name: "Психотерапия", link: "/rehabilitation/psychotherapy" }
        ]
    },
    {
        label: "Контакты",
        id: "contacts",
        icon: <FavoriteIcon />,
        link: "/about", // Исправлено: добавлен слэш
    },
];

export default function Navigation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [openItemId, setOpenItemId] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const mobileOpen = Boolean(mobileMenuAnchor);

    const isActiveLink = (link) => {
        return location.pathname === link;
    };

    // Функция для навигации
    const handleNavigation = (link) => {
        navigate(link);
        handleMobileMenuClose();
    };

    const handleMenuClick = (event, item) => {
        // Если у пункта нет подменю, переходим по ссылке
        if (!item.subItems || item.subItems.length === 0) {
            navigate(item.link);
            return;
        }

        // Если есть подменю, открываем/закрываем его
        if (openItemId === item.id) {
            handleMenuClose();
        } else {
            setAnchorEl(event.currentTarget);
            setOpenItemId(item.id);
        }
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenItemId(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMenuAnchor(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchor(null);
        setActiveSubMenu(null);
    };

    const handleSubMenuOpen = (itemId) => {
        setActiveSubMenu(activeSubMenu === itemId ? null : itemId);
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={2}
                sx={{
                    backdropFilter: "blur(30px)",
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#1a1a1a',
                    top: { xs: "56px", md: "64px" },
                    borderBottom: '1px solid rgba(75, 123, 255, 0.2)',
                }}
            >
                <Toolbar sx={{ display: 'flex', minHeight: { xs: '56px', md: '64px' } }}>
                    {/* Левая часть - часы работы */}
                    <Box sx={{
                        flex: 1,
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        gap: 1
                    }}>
                        <AccessTimeIcon sx={{ color: '#4B7BFF', fontSize: 20 }} />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            Круглосуточно
                        </Typography>
                        <Chip
                            label="Анонимно"
                            size="small"
                            sx={{
                                ml: 1,
                                backgroundColor: '#4B7BFF',
                                color: 'white',
                                fontSize: '0.7rem',
                                height: '20px'
                            }}
                        />
                    </Box>

                    {/* Центральное меню - десктоп */}
                    <Box sx={{
                        display: { xs: "none", md: "flex" },
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        flex: 1,
                    }}>
                        {navItems.map((item) => (
                            <Box key={item.id}>
                                <Button
                                    onClick={(e) => handleMenuClick(e, item)}
                                    sx={{
                                        fontWeight: 600,
                                        color: '#1a1a1a',
                                        px: 2,
                                        py: 1,
                                        borderRadius: '8px',
                                        backgroundColor: openItemId === item.id ? 'rgba(75, 123, 255, 0.08)' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: 'rgba(75, 123, 255, 0.08)',
                                        }
                                    }}
                                    startIcon={item.icon}
                                    endIcon={item.subItems?.length > 0 ? (
                                        <ArrowDropDownIcon sx={{
                                            transform: openItemId === item.id ? 'rotate(180deg)' : 'none',
                                            transition: 'transform 0.3s'
                                        }} />
                                    ) : (
                                        <ArrowForwardIcon sx={{ fontSize: 18 }} />
                                    )}
                                >
                                    {item.label}
                                </Button>

                                {/* Выпадающее меню только если есть подменю */}
                                {item.subItems && item.subItems.length > 0 && (
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={openItemId === item.id}
                                        onClose={handleMenuClose}
                                        disableScrollLock
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                        PaperProps={{
                                            sx: {
                                                mt: 1,
                                                minWidth: 220,
                                                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                                                backdropFilter: 'blur(10px)',
                                                borderRadius: '12px',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                                border: '1px solid rgba(75, 123, 255, 0.2)',
                                            }
                                        }}
                                    >
                                        <Box sx={{ p: 1 }}>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    px: 2,
                                                    py: 1,
                                                    color: '#4B7BFF',
                                                    fontWeight: 600,
                                                    borderBottom: '1px solid rgba(75, 123, 255, 0.2)',
                                                    mb: 0.5
                                                }}
                                            >
                                                {item.label}
                                            </Typography>
                                            {item.subItems.map((subItem, index) => (
                                                <MenuItem
                                                    key={index}
                                                    onClick={() => {
                                                        handleMenuClose();
                                                        navigate(subItem.link);
                                                    }}
                                                    sx={{
                                                        borderRadius: '8px',
                                                        my: 0.5,
                                                        textDecoration: 'none',
                                                        color: 'inherit',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(75, 123, 255, 0.08)',
                                                        }
                                                    }}
                                                >
                                                    {subItem.name}
                                                </MenuItem>
                                            ))}
                                        </Box>
                                    </Menu>
                                )}
                            </Box>
                        ))}
                    </Box>

                    {/* Правая часть - контакты */}
                    <Box sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: 2
                    }}>
                        {/* Экстренная кнопка для десктопа */}
                        <Button
                            variant="contained"
                            startIcon={<EmergencyIcon />}
                            sx={{
                                backgroundColor: '#4B7BFF',
                                color: 'white',
                                display: { xs: 'none', md: 'inline-flex' },
                                borderRadius: '50px',
                                px: 3,
                                '&:hover': {
                                    backgroundColor: '#3A5FCC',
                                }
                            }}
                        >
                            Экстренно
                        </Button>

                        {/* Кнопка с телефоном для десктопа */}
                        <Button
                            variant="outlined"
                            startIcon={<PhoneIcon />}
                            href="tel:+79999999999"
                            sx={{
                                color: '#1a1a1a',
                                borderColor: '#4B7BFF',
                                borderWidth: '2px',
                                display: { xs: 'none', md: 'inline-flex' },
                                borderRadius: '50px',
                                px: 3,
                                fontWeight: 600,
                                '&:hover': {
                                    borderColor: '#4B7BFF',
                                    backgroundColor: 'rgba(75, 123, 255, 0.04)',
                                }
                            }}
                        >
                            +7 (999) 999-99-99
                        </Button>

                        {/* Мобильная версия - иконки */}
                        <IconButton
                            color="inherit"
                            sx={{
                                display: { xs: 'inline-flex', md: 'none' },
                                backgroundColor: '#4B7BFF',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: '#3A5FCC',
                                }
                            }}
                            href="tel:+79999999999"
                        >
                            <PhoneIcon />
                        </IconButton>

                        <IconButton
                            color="inherit"
                            edge="end"
                            aria-label="Открыть мобильное меню"
                            aria-controls={mobileOpen ? "mobile-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={mobileOpen ? "true" : undefined}
                            sx={{
                                display: { md: "none" },
                                color: '#1a1a1a',
                            }}
                            onClick={handleMobileMenuOpen}
                        >
                            <Badge badgeContent={navItems.length} color="primary">
                                <MenuIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Мобильное меню (вынесено за пределы Toolbar) */}
            <Menu
                id="mobile-menu"
                anchorEl={mobileMenuAnchor}
                open={mobileOpen}
                onClose={handleMobileMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    sx: {
                        width: '280px',
                        maxWidth: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        backdropFilter: 'blur(10px)',
                    }
                }}
            >
                <Box sx={{ p: 2, pb: 1 }}>
                    <Typography variant="overline" sx={{ color: '#4B7BFF', fontWeight: 700 }}>
                        Быстрая помощь
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', mb: 1.5 }}>
                        Круглосуточная анонимная консультация в Магадане
                    </Typography>
                    <Box sx={{ display: 'grid', gap: 1 }}>
                        {mobileQuickActions.map((action) => (
                            <Button
                                key={action.label}
                                component={RouterLink}
                                to={action.link}
                                onClick={handleMobileMenuClose}
                                startIcon={action.icon}
                                sx={{
                                    justifyContent: 'flex-start',
                                    textAlign: 'left',
                                    color: isActiveLink(action.link) ? '#4B7BFF' : '#1a1a1a',
                                    backgroundColor: isActiveLink(action.link) ? 'rgba(75, 123, 255, 0.08)' : 'rgba(75, 123, 255, 0.04)',
                                    borderRadius: '12px',
                                    py: 1,
                                    '&:hover': {
                                        backgroundColor: 'rgba(75, 123, 255, 0.12)',
                                    },
                                }}
                            >
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                                        {action.label}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#666', lineHeight: 1.2 }}>
                                        {action.description}
                                    </Typography>
                                </Box>
                            </Button>
                        ))}
                    </Box>
                </Box>

                <Divider sx={{ my: 1 }} />

                {navItems.map((item, itemIndex) => (
                    <Box key={item.id}>
                        {/* Если есть subItems - показываем с выпадающим меню */}
                        {item.subItems && item.subItems.length > 0 ? (
                            <>
                                <MenuItem
                                    onClick={() => handleSubMenuOpen(item.id)}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        py: 1.5,
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                        <Box sx={{ color: '#4B7BFF' }}>{item.icon}</Box>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {item.label}
                                        </Typography>
                                    </Box>
                                    <ArrowDropDownIcon
                                        sx={{
                                            transform: activeSubMenu === item.id ? 'rotate(180deg)' : 'none',
                                            transition: 'transform 0.3s',
                                        }}
                                    />
                                </MenuItem>

                                {/* Подменю с анимацией */}
                                <Collapse in={activeSubMenu === item.id}>
                                    <Box sx={{ backgroundColor: 'rgba(75, 123, 255, 0.04)', py: 0.5 }}>
                                        {item.subItems.map((subItem, subIndex) => (
                                            <MenuItem
                                                key={subIndex}
                                                onClick={() => handleNavigation(subItem.link)}
                                                sx={{
                                                    pl: 5,
                                                    py: 1,
                                                    fontSize: '0.95rem',
                                                    color: isActiveLink(subItem.link) ? '#4B7BFF' : '#666',
                                                    fontWeight: isActiveLink(subItem.link) ? 600 : 400,
                                                    backgroundColor: isActiveLink(subItem.link) ? 'rgba(75, 123, 255, 0.08)' : 'transparent',
                                                    textDecoration: 'none',
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(75, 123, 255, 0.08)',
                                                    }
                                                }}
                                            >
                                                {subItem.name}
                                            </MenuItem>
                                        ))}
                                    </Box>
                                </Collapse>
                            </>
                        ) : (
                            /* Если нет subItems - показываем как обычную ссылку */
                            <MenuItem
                                onClick={() => handleNavigation(item.link)}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    py: 1.5,
                                    textDecoration: 'none',
                                    color: isActiveLink(item.link) ? '#4B7BFF' : 'inherit',
                                    backgroundColor: isActiveLink(item.link) ? 'rgba(75, 123, 255, 0.08)' : 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'rgba(75, 123, 255, 0.08)',
                                    }
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                    <Box sx={{ color: '#4B7BFF' }}>{item.icon}</Box>
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {item.label}
                                    </Typography>
                                </Box>
                                <ArrowForwardIcon sx={{ fontSize: 18, opacity: 0.7 }} />
                            </MenuItem>
                        )}

                        {/* Разделитель между пунктами меню */}
                        {itemIndex < navItems.length - 1 && (
                            <Divider sx={{ my: 0.5 }} />
                        )}
                    </Box>
                ))}

                <Divider sx={{ my: 1 }} />

                {/* Контактная информация в мобильном меню */}
                <Box sx={{ p: 2 }}>
                    <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                        Круглосуточно | Анонимно
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        startIcon={<EmergencyIcon />}
                        href="tel:+79999999999"
                        sx={{
                            backgroundColor: '#4B7BFF',
                            color: 'white',
                            borderRadius: '50px',
                            mb: 1,
                            '&:hover': {
                                backgroundColor: '#3a62cc',
                            }
                        }}
                    >
                        Экстренная консультация
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<PhoneIcon />}
                        href="tel:+79999999999"
                        sx={{
                            color: '#1a1a1a',
                            borderColor: '#4B7BFF',
                            borderRadius: '50px',
                            fontWeight: 600,
                            '&:hover': {
                                borderColor: '#4B7BFF',
                                backgroundColor: 'rgba(75, 123, 255, 0.04)',
                            }
                        }}
                    >
                        +7 (999) 999-99-99
                    </Button>
                </Box>
            </Menu>
        </>
    );
}