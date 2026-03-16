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

const navItems = [
    {
        label: "Алкоголизм",
        id: "alcoholism",
        icon: <LocalHospitalIcon />,
        subItems: ["Вывод из запоя", "Кодирование", "Капельницы", "Реабилитация"]
    },
    {
        label: "Наркомания",
        id: "addiction",
        icon: <MedicalServicesIcon />,
        subItems: ["Детоксикация", "УБОД", "Реабилитация", "Социальная адаптация"]
    },
    {
        label: "Реабилитация",
        id: "rehab",
        icon: <HealingIcon />,
        subItems: ["Стационар", "Дневной стационар", "Амбулаторно", "Психотерапия"]
    },
    {
        label: "Контакты",
        id: "contacts",
        icon: <FavoriteIcon />,
        subItems: ["Адреса", "Телефоны", "Как добраться", "Запись"]
    },
];

export default function Navigation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [openItemId, setOpenItemId] = useState(null); // Для отслеживания открытого меню

    const mobileOpen = Boolean(mobileMenuAnchor);

    const handleMenuClick = (event, itemId) => {
        if (openItemId === itemId) {
            // Если меню уже открыто, закрываем его
            setAnchorEl(null);
            setOpenItemId(null);
        } else {
            // Иначе открываем новое меню
            setAnchorEl(event.currentTarget);
            setOpenItemId(itemId);
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
                                    onClick={(e) => handleMenuClick(e, item.id)}
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
                                    endIcon={<ArrowDropDownIcon sx={{ transform: openItemId === item.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />}
                                >
                                    {item.label}
                                </Button>

                                {/* Выпадающее меню по клику */}
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
                                                onClick={handleMenuClose}
                                                sx={{
                                                    borderRadius: '8px',
                                                    my: 0.5,
                                                    '&:hover': {
                                                        backgroundColor: 'rgba(75, 123, 255, 0.08)',
                                                    }
                                                }}
                                            >
                                                {subItem}
                                            </MenuItem>
                                        ))}
                                    </Box>
                                </Menu>
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
                        >
                            <PhoneIcon />
                        </IconButton>

                        <IconButton
                            color="inherit"
                            edge="end"
                            sx={{
                                display: { md: "none" },
                                color: '#1a1a1a',
                            }}
                            onClick={handleMobileMenuOpen}
                        >
                            <Badge badgeContent={4} color="primary">
                                <MenuIcon />
                            </Badge>
                        </IconButton>
                    </Box>

                    {/* Мобильное меню */}
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
                        {navItems.map((item) => (
                            <Box key={item.id}>
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

                                {/* Подменю */}
                                {activeSubMenu === item.id && (
                                    <Box sx={{ backgroundColor: 'rgba(75, 123, 255, 0.04)', py: 0.5 }}>
                                        {item.subItems.map((subItem, index) => (
                                            <MenuItem
                                                key={index}
                                                onClick={handleMobileMenuClose}
                                                sx={{
                                                    pl: 5,
                                                    py: 1,
                                                    fontSize: '0.95rem',
                                                    color: '#666',
                                                }}
                                            >
                                                {subItem}
                                            </MenuItem>
                                        ))}
                                    </Box>
                                )}

                                {navItems.indexOf(item) < navItems.length - 1 && (
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
                                startIcon={<PhoneIcon />}
                                href="tel:+79999999999"
                                sx={{
                                    backgroundColor: '#4B7BFF',
                                    color: 'white',
                                    borderRadius: '50px',
                                }}
                            >
                                +7 (999) 999-99-99
                            </Button>
                        </Box>
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    );
}