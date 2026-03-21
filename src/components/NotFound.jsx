import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NotFoundPage() {
    const navigate = useNavigate();

    // Варианты анимаций
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15,
                delayChildren: 0.2,
                ease: [0.43, 0.13, 0.23, 0.96], // Кастомная кривая Безье
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0, rotate: -180 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.8
            }
        },
        hover: {
            scale: 1.1,
            rotate: [0, -10, 10, -5, 5, 0],
            transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    };

    const numberVariants = {
        hidden: { opacity: 0, scale: 0.5, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.6
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.1,
                type: "spring",
                damping: 15,
                stiffness: 100
            }
        }),
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.95
        }
    };

    const backgroundVariants = {
        animate: {
            x: {
                value: [0, 50, 0],
                transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.5, 1],
                }
            },
            y: {
                value: [0, 50, 0],
                transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.5, 1],
                }
            },
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
            }
        }
    };
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
            {/* Анимированный фон */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(75, 123, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
                variants={backgroundVariants}
                animate="animate"
            />

            <Container maxWidth="md">
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="visible"
                >
                    <Box
                        sx={{
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 1,
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: { xs: 2, md: 4 },
                            padding: { xs: 3, md: 6 },
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderRadius: 'inherit',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
                                zIndex: -1,
                            }
                        }}
                    >
                        {/* Анимированная иконка */}
                        <motion.div
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                        >
                            <ErrorOutlineIcon
                                sx={{
                                    fontSize: { xs: 80, md: 120 },
                                    color: '#4B7BFF',
                                    mb: 2,
                                }}
                            />
                        </motion.div>

                        {/* Анимированное число 404 */}
                        <motion.div
                            variants={numberVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '4rem', md: '6rem' },
                                    fontWeight: 800,
                                    background: 'linear-gradient(135deg, #4B7BFF 0%, #764ba2 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    mb: 2,
                                }}
                            >
                                404
                            </Typography>
                        </motion.div>

                        {/* Анимированный текст */}
                        <motion.div variants={itemVariants}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: { xs: '1.5rem', md: '2rem' },
                                    fontWeight: 600,
                                    color: '#1a1a1a',
                                    mb: 2,
                                }}
                            >
                                Страница не найдена
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '0.9rem', md: '1.1rem' },
                                    color: '#666',
                                    mb: 4,
                                    maxWidth: '500px',
                                    mx: 'auto',
                                }}
                            >
                                К сожалению, страница, которую вы ищете, не существует или была перемещена.
                                Проверьте правильность введенного адреса или вернитесь на главную.
                            </Typography>
                        </motion.div>

                        {/* Кнопки действий с анимацией */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                justifyContent: 'center',
                                flexDirection: { xs: 'column', sm: 'row' },
                            }}
                        >
                            <motion.div
                                custom={0}
                                variants={buttonVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Button
                                    variant="contained"
                                    startIcon={<HomeIcon />}
                                    onClick={() => navigate('/')}
                                    sx={{
                                        backgroundColor: '#4B7BFF',
                                        px: { xs: 3, md: 4 },
                                        py: { xs: 1, md: 1.5 },
                                        fontSize: { xs: '0.9rem', md: '1rem' },
                                        '&:hover': {
                                            backgroundColor: '#3a62cc',
                                        },
                                    }}
                                >
                                    На главную
                                </Button>
                            </motion.div>

                            <motion.div
                                custom={1}
                                variants={buttonVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <Button
                                    variant="outlined"
                                    startIcon={<ArrowBackIcon />}
                                    onClick={() => navigate(-1)}
                                    sx={{
                                        borderColor: '#4B7BFF',
                                        color: '#4B7BFF',
                                        px: { xs: 3, md: 4 },
                                        py: { xs: 1, md: 1.5 },
                                        fontSize: { xs: '0.9rem', md: '1rem' },
                                        '&:hover': {
                                            borderColor: '#3a62cc',
                                            backgroundColor: 'rgba(75, 123, 255, 0.1)',
                                        },
                                    }}
                                >
                                    Вернуться назад
                                </Button>
                            </motion.div>
                        </Box>

                        {/* Дополнительная информация с анимацией */}
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.8 }}
                        >
                            <Typography
                                variant="caption"
                                sx={{
                                    display: 'block',
                                    mt: 4,
                                    color: '#999',
                                    fontSize: { xs: '0.7rem', md: '0.8rem' },
                                }}
                            >
                                Если вы уверены, что это ошибка, свяжитесь с нами
                            </Typography>
                        </motion.div>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}

export default NotFoundPage;