// Color tokens
export const colors = {
  primary: 'hsl(198, 85%, 45%)', // Blu Marina
  secondary: 'hsl(240, 4.8%, 95.9%)', // Grigio chiaro
  background: 'hsl(0, 0%, 100%)', // Bianco
  foreground: 'hsl(240, 10%, 3.9%)', // Quasi nero
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))'
} as const;

// Spacing scale (in pixels)
export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem',  // 8px
  3: '0.75rem', // 12px
  4: '1rem',    // 16px
  6: '1.5rem',  // 24px
  8: '2rem',    // 32px
  12: '3rem',   // 48px
  16: '4rem',   // 64px
  24: '6rem'    // 96px
} as const;

// Typography
export const typography = {
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem' // 30px
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  },
  lineHeights: {
    none: '1',
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75'
  }
} as const;

// Breakpoints (in pixels)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px'
} as const;

// Border radius
export const radius = {
  none: '0',
  sm: 'calc(var(--radius) - 4px)',
  md: 'calc(var(--radius) - 2px)',
  lg: 'var(--radius)',
  full: '9999px'
} as const;

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
} as const;

// Container
export const container = {
  center: true,
  padding: '2rem',
  maxWidth: '1400px'
} as const;

// Types
export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type Typography = typeof typography;
export type Breakpoints = typeof breakpoints;
export type Radius = typeof radius;
export type Shadows = typeof shadows;
export type Container = typeof container;