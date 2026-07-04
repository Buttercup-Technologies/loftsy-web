import { chromium } from 'playwright'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputPath = path.join(__dirname, '../docs/screenshot.png')
const url = process.env.SCREENSHOT_URL ?? 'http://localhost:5173'

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
})

await page.goto(url, { waitUntil: 'networkidle' })
await page.evaluate(async () => {
  await document.fonts.ready

  const scrollHeight = document.documentElement.scrollHeight
  const step = 500

  for (let y = 0; y <= scrollHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise((resolve) => setTimeout(resolve, 150))
  }

  window.scrollTo(0, scrollHeight)
  await new Promise((resolve) => setTimeout(resolve, 700))

  window.scrollTo(0, 0)
  await new Promise((resolve) => setTimeout(resolve, 700))
})

await page.screenshot({ path: outputPath, fullPage: true })
await browser.close()

console.log(`Screenshot saved to ${outputPath}`)
