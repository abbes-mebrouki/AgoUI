import { ThemeProvider, StylesProvider } from "@material-ui/core/"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import MuiCustomTheme from "../src/mui-theme"
import { theme } from "../src/tokens-obj"

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

export const decorators = [
	(Story) => (
		<StylesProvider injectFirst>
			<ThemeProvider theme={MuiCustomTheme}>
				<StyledThemeProvider theme={theme}>
					<Story />
				</StyledThemeProvider>
			</ThemeProvider>
		</StylesProvider>
	),
]
// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={MuiCustomTheme}>
//       <Story />
//     </ThemeProvider>
//   )
// ]
