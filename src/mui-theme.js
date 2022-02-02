import { createTheme } from "@material-ui/core/styles"

import { theme } from "./tokens-obj"

const muiPalette = {
	primary: {
		main: theme.MdSysColorPrimary,
		light: theme.MdSysColorPrimaryLight,
		dark: theme.MdSysColorPrimaryDark,
	},
	secondary: {
		main: theme.MdSysColorSecondary,
		light: theme.MdSysColorSecondaryLight,
		dark: theme.MdSysColorSecondaryDark,
	},
	error: {
		main: theme.MdSysColorError,
		light: theme.MdSysColorErrorLight,
		dark: theme.MdSysColorErrorDark,
	},
	background: {
		main: theme.MdSysColorSurface,
		light: theme.MdSysColorSurfaceLight,
		dark: theme.MdSysColorSurfaceDark,
	},
}

const muiTypography = {
	fontFamily: "Titillium Web",
	src: `url(@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700&display=swap');
	)`,
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightMedium: 600,
	fontWeightBold: 700,
}

const muiOverrides = {
	MuiButton: {
		root: {
			textTransform: "none",
			// font: 'normal normal 600 14px/20px Arial',
			borderRadius: 100,
			padding: "8px 24px",
			height: 40,
			maxHeight: 40,
		},
		
	},
	MuiTypography: {
		root: {
			margin: "10px 10px 0 10px",
		},
	},
	MuiTextField: {
		root: {
			// margin: 8,
			height: 56,
			minHeight: 56,
			borderRadius: 8,
		},
	},

	MuiCheckbox: {
		root: {},
		MuiIconButton: {
			borderRadius: 6,
		},
	},
}

const muiProps = {
	MuiButton: {
		disableRipple: true,
		variant: "contained",

		
	},
	MuiCheckbox: {
		disableRipple: true,
	},
	MuiTextField: {
		variant: "outlined",
		size: "small",
		InputLabelProps: {
			shrink: true,
		},
	},
	MuiBadge: {
		overlap: "circle",
	},
}

const MuiCustomTheme = createTheme({
	shadows: ["none"],
	palette: { ...muiPalette },
	overrides: { ...muiOverrides },
	props: { ...muiProps },
	typography: { ...muiTypography },
})

export default MuiCustomTheme

/*
export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#6f49af',
    },
    secondary: {
      main: '#635A70',
    },
    error: {
      main: '#BA1B1B',
    },
    background: {
      default: '#FFFBFC',
    },
  },
  typography: {
    fontFamily: 'Titillium Web',
  },
};

*/
