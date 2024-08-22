'use client'
import NextTopLoader from 'nextjs-toploader'

/**
 * props NextTopLoader:
 * - color: to change the default color of TopLoader.
 * - initialPosition: to change initial position for the TopLoader in percentage, : `0.08 = 8%`.
 * - crawlSpeed: increment delay speed in `ms`.
 * - speed: animation speed for the TopLoader in `ms`
 * - easing: animation settings using easing (a CSS easing string).
 * - height: height of TopLoader in `px`.
 * - crawl: auto incrementing behavior for the TopLoader.
 * - showSpinner: to show spinner or not.
 * - shadow: a smooth shadow for the TopLoader. (set to `false` to disable it)
 * - template: to include custom HTML attributes for the TopLoader.
 * - zIndex: defines zIndex for the TopLoader.
 * - showAtBottom: To show the TopLoader at bottom. (increase height for the TopLoader to ensure it’s visibility at the mobile devices)
 */

export function TopLoader() {
    return (
        <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            zIndex={9999}
        />
    )
}
