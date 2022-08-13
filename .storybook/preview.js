import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator, addParameters, configure } from '@storybook/react';

addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
});

configure(require.context('../src', true, /\.stories\.tsx$/), module);
