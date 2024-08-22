'use client'
import React, { useEffect } from 'react'
import NextNProgress from 'nextjs-progressbar'

export function ProgressBar() {
    useEffect(() => {
        console.log('ProgressBar rendered')
    }, [])

    return (
        <NextNProgress
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
        />
    )
}
