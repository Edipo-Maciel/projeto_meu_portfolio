from PIL import Image, ImageFilter, ImageDraw
from pathlib import Path

path = Path(r"C:\Users\Edipo_Maciel\Documents\Edipo\Projeto_Meu_Portfolio\public\case\login.png")
img = Image.open(path).convert("RGBA")
w, h = img.size
print("size", w, h)

# Left branding panel (logo + TRANSVELOSTER text)
left = int(w * 0.17)
top = int(h * 0.20)
right = int(w * 0.43)
bottom = int(h * 0.68)

# Strong blur over logo + brand name area
region = img.crop((left, top, right, bottom)).filter(ImageFilter.GaussianBlur(radius=26))
img.paste(region, (left, top))

# Frosted cover so the name is fully unreadable
overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
draw = ImageDraw.Draw(overlay)
draw.rounded_rectangle(
    (
        left + int((right - left) * 0.06),
        top + int((bottom - top) * 0.08),
        right - int((right - left) * 0.06),
        bottom - int((bottom - top) * 0.18),
    ),
    radius=16,
    fill=(245, 241, 235, 185),
)
img = Image.alpha_composite(img, overlay)

img.convert("RGB").save(path, "PNG", optimize=True)
print("saved", path)
