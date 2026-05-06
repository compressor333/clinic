import { Box, Typography, Button, Container, Fade, Grow, Slide, Zoom } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                mt: { xs: '100px', md: '50px' },
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Анимированный фон на CSS вместо сторонней анимации */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(var(--color-primary-rgb), 0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    animation: 'notFoundGrid 20s linear infinite',
                    '@keyframes notFoundGrid': {
                        '0%, 100%': { transform: 'translate(0, 0)' },
                        '50%': { transform: 'translate(50px, 50px)' },
                    },
                    '@media (prefers-reduced-motion: reduce)': {
                        animation: 'none',
                    },
                }}
            />

            <Container maxWidth="md">
                <Fade in timeout={800}>
                    <Box
                        sx={{
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 1,
                            backgroundColor: 'rgba(var(--color-white-rgb), 0.7)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: { xs: 2, md: 4 },
                            padding: { xs: 3, md: 6 },
                            boxShadow: '0 8px 32px rgba(var(--color-black-rgb), 0.1)',
                            border: '1px solid rgba(var(--color-white-rgb), 0.3)',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderRadius: 'inherit',
                                background: 'linear-gradient(135deg, rgba(var(--color-white-rgb), 0.4) 0%, rgba(var(--color-white-rgb), 0.1) 100%)',
                                zIndex: -1,
                            }
                        }}
                    >
                        <Zoom in timeout={700} style={{ transitionDelay: '150ms' }}>
                            <ErrorOutlineIcon
                                sx={{
                                    fontSize: { xs: 80, md: 120 },
                                    color: 'var(--color-primary)',
                                    mb: 2,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1) rotate(-6deg)',
                                    },
                                }}
                            />
                        </Zoom>

                        <Grow in timeout={700} style={{ transitionDelay: '250ms' }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '4rem', md: '6rem' },
                                    fontWeight: 800,
                                    background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    mb: 2,
                                }}
                            >
                                404
                            </Typography>
                        </Grow>

                        <Slide in direction="up" timeout={650} style={{ transitionDelay: '350ms' }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: { xs: '1.5rem', md: '2rem' },
                                    fontWeight: 600,
                                    color: 'var(--color-text)',
                                    mb: 2,
                                }}
                            >
                                Страница не найдена
                            </Typography>
                        </Slide>

                        <Slide in direction="up" timeout={700} style={{ transitionDelay: '450ms' }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '0.9rem', md: '1.1rem' },
                                    color: 'var(--color-text-secondary)',
                                    mb: 4,
                                    maxWidth: '500px',
                                    mx: 'auto',
                                }}
                            >
                                К сожалению, страница, которую вы ищете, не существует или была перемещена.
                                Проверьте правильность введенного адреса или вернитесь на главную.
                            </Typography>
                        </Slide>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                justifyContent: 'center',
                                flexDirection: { xs: 'column', sm: 'row' },
                            }}
                        >
                            <Grow in timeout={650} style={{ transitionDelay: '550ms' }}>
                                <Button
                                    variant="contained"
                                    startIcon={<HomeIcon />}
                                    onClick={() => navigate('/')}
                                    sx={{
                                        backgroundColor: 'var(--color-primary)',
                                        px: { xs: 3, md: 4 },
                                        py: { xs: 1, md: 1.5 },
                                        fontSize: { xs: '0.9rem', md: '1rem' },
                                        transition: 'transform 0.2s ease, background-color 0.2s ease',
                                        '&:hover': {
                                            backgroundColor: 'var(--color-primary-dark)',
                                            transform: 'scale(1.05)',
                                        },
                                        '&:active': {
                                            transform: 'scale(0.95)',
                                        },
                                    }}
                                >
                                    На главную
                                </Button>
                            </Grow>

                            <Grow in timeout={650} style={{ transitionDelay: '650ms' }}>
                                <Button
                                    variant="outlined"
                                    startIcon={<ArrowBackIcon />}
                                    onClick={() => navigate(-1)}
                                    sx={{
                                        borderColor: 'var(--color-primary)',
                                        color: 'var(--color-primary)',
                                        px: { xs: 3, md: 4 },
                                        py: { xs: 1, md: 1.5 },
                                        fontSize: { xs: '0.9rem', md: '1rem' },
                                        transition: 'transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
                                        '&:hover': {
                                            borderColor: 'var(--color-primary-dark)',
                                            backgroundColor: 'rgba(var(--color-primary-rgb), 0.1)',
                                            transform: 'scale(1.05)',
                                        },
                                        '&:active': {
                                            transform: 'scale(0.95)',
                                        },
                                    }}
                                >
                                    Вернуться назад
                                </Button>
                            </Grow>
                        </Box>

                        <Fade in timeout={800} style={{ transitionDelay: '800ms' }}>
                            <Typography
                                variant="caption"
                                sx={{
                                    display: 'block',
                                    mt: 4,
                                    color: 'var(--color-text-muted)',
                                    fontSize: { xs: '0.7rem', md: '0.8rem' },
                                }}
                            >
                                Если вы уверены, что это ошибка, свяжитесь с нами
                            </Typography>
                        </Fade>
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
}

export default NotFoundPage;
