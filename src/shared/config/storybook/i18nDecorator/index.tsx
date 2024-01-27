import { I18nextProvider } from "react-i18next";

import { Suspense } from "react";
import i18n from "./i18nForTests";
import { StoryFn } from "@storybook/react";

// Wrap your stories in the I18nextProvider component
export const I18NextDecorator = (Story: StoryFn) => {
	return (
		// This catches the suspense from components not yet ready (still loading translations)
		// Alternative: set useSuspense to false on i18next.options.react when initializing i18next
		<Suspense fallback={<div>loading translations...</div>}>
			<I18nextProvider i18n={i18n}>
				<Story />
			</I18nextProvider>
		</Suspense>
	);
};
