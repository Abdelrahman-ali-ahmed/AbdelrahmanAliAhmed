"use client"
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

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
                <FaSun className='h-4 w-4' />
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
            <FaSun className='absolute h-4 w-4 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0' />
            <FaMoon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'/>
        </Button>
    )
}
