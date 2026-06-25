import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const admobBuildGradle = resolve(
  rootDir,
  'node_modules/@capacitor-community/admob/android/build.gradle',
)

if (!existsSync(admobBuildGradle)) {
  console.warn('AdMob Gradle patch skipped: @capacitor-community/admob is not installed.')
  process.exit(0)
}

const original = readFileSync(admobBuildGradle, 'utf8')
const patched = original.replace(
  "getDefaultProguardFile('proguard-android.txt')",
  "getDefaultProguardFile('proguard-android-optimize.txt')",
)

if (patched === original) {
  console.log('AdMob Gradle patch skipped: file is already compatible.')
  process.exit(0)
}

writeFileSync(admobBuildGradle, patched)
console.log('AdMob Gradle patch applied.')
