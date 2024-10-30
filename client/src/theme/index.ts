import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      main: '#134999',
      50: '#e2f1ff',
      100: '#b8d3fb',
      200: '#8db6f2',
      300: '#6098eb',
      400: '#367be5',
      500: '#1d61cb',
      600: '#144c9f',
      700: '#0b3672',
      800: '#022047',
      900: '#000b1d',
    },
    secondary: {
      main: '#FF9E00',
      50: '#fff4da',
      100: '#ffe2ad',
      200: '#ffcf7d',
      300: '#ffbb4b',
      400: '#ffa81a',
      500: '#e68e00',
      600: '#b36f00',
      700: '#814f00',
      800: '#4e2e00',
      900: '#1f0f00',
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: { outline: '0 0 0 1px var(--chakra-colors-primary-main)' },
});
