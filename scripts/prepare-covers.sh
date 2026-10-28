#!/bin/zsh
# Shrink book covers before uploading them to Ghost.
#
# Usage: scripts/prepare-covers.sh cover.png [more covers…]
#
# Writes cover.webp next to each input: at most 2000px wide (the largest size the
# theme asks Ghost for), transparency kept. Ghost makes its smaller sizes from this.

set -e

if (( $# == 0 )); then
    echo "Usage: $0 cover.png [more covers…]" >&2
    exit 1
fi

if ! command -v cwebp >/dev/null; then
    echo "cwebp not found: brew install webp" >&2
    exit 1
fi

for input in "$@"; do
    output="${input:r}.webp"
    if [[ "$input" == "$output" ]]; then
        echo "Skipping $input: already WebP" >&2
        continue
    fi

    width=$(sips -g pixelWidth "$input" | awk '/pixelWidth/ { print $2 }')
    resize=()
    (( width > 2000 )) && resize=(-resize 2000 0)

    cwebp -quiet $resize -q 85 -m 6 -alpha_q 100 -sharp_yuv -metadata icc "$input" -o "$output"

    before=$(stat -f %z "$input")
    after=$(stat -f %z "$output")
    printf '%s: %s KB → %s KB\n' "${output:t}" $(( before / 1024 )) $(( after / 1024 ))
done
