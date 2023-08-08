/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './features/**/*.{ts,tsx}',
    ],
    theme: {
        screens: {
            tablet: '758px',
            desktop: '1440px',
        },
        fontSize: {
            h1: ['3.5rem', { lineHeight: '3.625rem', letterSpacing: '0.125rem', fontWeight: '700' }],
            h2: ['2.5rem', { lineHeight: '2.75rem', letterSpacing: '0.09375rem', fontWeight: '700' }],
            h3: ['2rem', { lineHeight: '2.25rem', letterSpacing: '0.071875px', fontWeight: '700' }],
            h4: ['1.75rem', { lineHeight: '2.375rem', letterSpacing: '0.125rem', fontWeight: '700' }],
            h5: ['1.5rem', { lineHeight: '2.0625rem', letterSpacing: '0.10625rem', fontWeight: '700' }],
            h6: ['1.125rem', { lineHeight: '1.5rem', letterSpacing: '0.08125rem', fontWeight: '700' }],
            overline: ['0.875rem', { lineHeight: '1.1875rem', letterSpacing: '0.625rem', fontWeight: '400' }],
            'sub-title': ['0.8125rem', { lineHeight: '1.5625rem', letterSpacing: '0.0625rem', fontWeight: '700' }],
            body: ['0.9375rem', { lineHeight: '1.5625rem', fontWeight: '500' }],
        },

        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            slate: 'var(--slate)',
            orange: 'hsl(var(--orange))',
            'light-orange': 'hsl(var(--light-orange))',
            dark: 'hsl(var(--dark))',
            'pure-dark': 'hsl(var(--pure-dark))',
            gray: 'hsl(var(--gray))',
            white: 'hsl(var(--white))',
            'pure-white': 'hsl(var(--pure-white))',
            red: '#FF0000',
            'pure-white': 'hsl(var(--pure-white))',

            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
                DEFAULT: 'hsl(var(--primary))',
                foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))',
            },
            destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))',
            },
            muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
                DEFAULT: 'hsl(var(--accent))',
                foreground: 'hsl(var(--accent-foreground))',
            },
            popover: {
                DEFAULT: 'hsl(var(--popover))',
                foreground: 'hsl(var(--popover-foreground))',
            },
            card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))',
            },
        },

        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
