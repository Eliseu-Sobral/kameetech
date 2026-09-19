#!/usr/bin/env bash
set -e

mkdir -p public/frames
echo "Extracting frames from public/hero.mp4..."

# Extract ~119 frames across ~30s (fps=4), scaled to 1280px width, high quality WebP
ffmpeg -y -i public/hero.mp4 -vf "fps=4,scale=1280:-1" -c:v libwebp -quality 80 public/frames/frame_%04d.webp
rm -f public/frames/*.jpg

FRAME_COUNT=$(ls -1 public/frames/frame_*.webp 2>/dev/null | wc -l)
echo "Extraction completed. Extracted $FRAME_COUNT WebP frames to public/frames/"
