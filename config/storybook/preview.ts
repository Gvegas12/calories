import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";
import { I18NextDecorator } from "../../src/shared/config/storybook/";
import { Preview } from "@storybook/react";
import "../../src/shared/config/storybook/i18nDecorator/i18nForTests";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [RouterDecorator, StyleDecorator, I18NextDecorator],
};

export default preview;
