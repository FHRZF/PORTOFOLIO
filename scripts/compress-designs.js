/**
 * Script compress & copy design images
 * Resize max 1200px, convert ke JPEG quality 80 untuk hemat size
 * Run: node scripts/compress-designs.js
 */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const SOURCE_DIR = 'D:\\PORTOFOLIO\\Design Portofolio'
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'designs')
const MAX_WIDTH = 1200
const QUALITY = 82

// Buat output dir jika belum ada
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

async function compressImages() {
  const files = fs.readdirSync(SOURCE_DIR).filter(f => f.toLowerCase().endsWith('.png'))
  console.log(`\n🎨 Ditemukan ${files.length} file PNG`)
  console.log(`📁 Output: ${OUTPUT_DIR}\n`)

  let success = 0
  let failed = 0

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const inputPath = path.join(SOURCE_DIR, file)
    const outputFileName = file.replace(/\.png$/i, '.jpg')
    const outputPath = path.join(OUTPUT_DIR, outputFileName)

    // Skip jika sudah ada
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  [${i+1}/${files.length}] Skip (sudah ada): ${outputFileName}`)
      success++
      continue
    }

    try {
      const metadata = await sharp(inputPath).metadata()
      const needResize = metadata.width > MAX_WIDTH

      await sharp(inputPath)
        .resize(needResize ? { width: MAX_WIDTH, withoutEnlargement: true } : undefined)
        .jpeg({ quality: QUALITY, mozjpeg: true })
        .toFile(outputPath)

      const inputSize = fs.statSync(inputPath).size
      const outputSize = fs.statSync(outputPath).size
      const ratio = Math.round((1 - outputSize/inputSize) * 100)

      console.log(`✅ [${i+1}/${files.length}] ${file} → ${outputFileName} (hemat ${ratio}%)`)
      success++
    } catch (err) {
      console.error(`❌ [${i+1}/${files.length}] Gagal: ${file} — ${err.message}`)
      failed++
    }
  }

  console.log(`\n🏁 Selesai! Berhasil: ${success}, Gagal: ${failed}`)

  // Generate daftar file untuk dipakai di React
  const outputFiles = fs.readdirSync(OUTPUT_DIR)
    .filter(f => f.toLowerCase().endsWith('.jpg'))
    .sort((a, b) => parseInt(a) - parseInt(b))

  const manifestPath = path.join(OUTPUT_DIR, 'manifest.json')
  fs.writeFileSync(manifestPath, JSON.stringify({
    total: outputFiles.length,
    files: outputFiles.map(f => `/designs/${f}`)
  }, null, 2))

  console.log(`📄 Manifest ditulis: ${manifestPath}`)
  console.log(`   Total gambar: ${outputFiles.length}`)
}

compressImages().catch(console.error)
