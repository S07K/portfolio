#!/usr/bin/env bash
# Encode a raw demo recording into web-ready files:
#   public/media/demos/<name>.mp4   H.264, CRF ~28, no audio, max 1280px, faststart
#   public/media/demos/<name>.webm  VP9 fallback
#   public/media/demos/<name>.jpg   poster frame
#
#   scripts/encode-demo.sh <name> [input] [trim-start-seconds]
set -euo pipefail

name="$1"
input="${2:-.demo-raw/$name.webm}"
start="${3:-1.2}" # drop the blank first frames while the page loads
out="public/media/demos"
mkdir -p "$out"

# Max 1280px wide and 960px tall (portrait phone recordings stay sharp but light).
vf="scale=w='min(1280,iw)':h='min(960,ih)':force_original_aspect_ratio=decrease:force_divisible_by=2:flags=lanczos"

ffmpeg -v error -y -ss "$start" -i "$input" -an -vf "$vf" \
  -fpsmax 30 -c:v libx264 -preset veryfast -crf 28 -pix_fmt yuv420p -movflags +faststart "$out/$name.mp4"

ffmpeg -v error -y -ss "$start" -i "$input" -an -vf "$vf" \
  -fpsmax 30 -c:v libvpx-vp9 -b:v 0 -crf 40 -row-mt 1 -deadline good -cpu-used 4 "$out/$name.webm"

ffmpeg -v error -y -ss "$(echo "$start + 1" | bc)" -i "$input" -frames:v 1 -vf "$vf" -q:v 3 "$out/$name.jpg"

ls -lh "$out/$name".* | awk '{print $5, $9}'
