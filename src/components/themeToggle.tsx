"use client"
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

// CSS-based icons to reduce bundle size
const SunIcon = () => (
  <div className="h-4 w-4 rounded-full bg-yellow-400 relative before:absolute before:inset-[-2px] before:rounded-full before:border-2 before:border-yellow-400 before:border-dashed" />
);

const MoonIcon = () => (
  <div className="h-4 w-4 rounded-full bg-slate-600 relative before:absolute before:top-[-1px] before:right-[-1px] before:h-3 before:w-3 before:rounded-full before:bg-white dark:before:bg-slate-900" />
);

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const t = useTranslations('theme')
    const [_mounted, set_mounted] = useState(false)

    useEffect(() => {
        set_mounted(true)
    }, [])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    if (!_mounted) {
        return (
            <Button
                variant="outline"
                size="icon"
                className='rounded-full'
                disabled
            >
                <SunIcon />
            </Button>
        )
    }

    return (
        <Button
            variant="outline"
            size="icon"
            className='rounded-full'
            onClick={toggleTheme}
            title={theme === 'light' ? t('dark') : t('light')}
        >
            <div className='absolute rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0'>
                <SunIcon />
            </div>
            <div className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'>
                <MoonIcon />
            </div>
        </Button>
    )
}
