import { createTheme } from "@mui/material/styles";

export const palette = {
    primary: "#4B7BFF",
    primaryLight: "#6E9EFF",
    primaryDark: "#3A5FCC",
    text: "#1A1A1A",
    textSecondary: "#666666",
    textMuted: "#999999",
    surface: "#FFFFFF",
    surfaceDark: "#121212",
    white: "#FFFFFF",
    socialWhatsapp: "#25D366",
    socialTelegram: "#26A5E4",
    socialInstagram: "#E1306C",
    socialEmail: "#EA4335",
};

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: palette.primary,
            light: palette.primaryLight,
            dark: palette.primaryDark,
            contrastText: palette.white,
        },
        text: {
            primary: palette.text,
            secondary: palette.textSecondary,
            disabled: palette.textMuted,
        },
        background: {
            default: palette.surface,
            paper: palette.surface,
        },
    },
    shape: {
        borderRadius: 16,
    },
    typography: {
        fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    fontWeight: 600,
                },
            },
        },
    },
});

export default theme;
