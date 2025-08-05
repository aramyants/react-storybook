/** @type { import('@storybook/react-vite').Preview } */
/** @type { import('@storybook/react-vite').ReactRenderer } */

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview = {
  parameters: {
    // actions: { argTypesRegex: '^on.*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      // The `a` and `b` arguments in this function have a type of `import('storybook/internal/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

  },

  decorators: [
    (Story) => (
      <ChakraProvider value={defaultSystem}>
        <Story />
      </ChakraProvider>
    ),
    withThemeByClassName({
      defaultTheme: 'light',
      themes: { light: '', dark: 'dark' },
    }),
  ],

  tags: ['autodocs'],
};

export default preview;
