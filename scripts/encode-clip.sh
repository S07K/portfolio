#!/usr/bin/env bash
# Encode a short, light hover clip for a project card (products WITHOUT a
# case study; case-study products reuse their demo from public/media/demos).
#   public/media/work/<name>.mp4   H.264, CRF 30, no audio, max 960px wide, first 24s
#
#   scripts/encode-clip.sh <name> <input> [start-seconds]
set -euo pipefail
name="$1"; input="$2"; start="${3:-0}"
out="public/media/work"; mkdir -p "$out"
ffmpeg -v error -y -ss "$start" -t 24 -i "$input" -an \
  -vf "scale=w='min(960,iw)':h='min(720,ih)':force_original_aspect_ratio=decrease:force_divisible_by=2:flags=lanczos" \
  -fpsmax 30 -c:v libx264 -preset veryfast -crf 30 -pix_fmt yuv420p -movflags +faststart "$out/$name.mp4"
ls -lh "$out/$name.mp4" | awk '{print $5, $9}'
