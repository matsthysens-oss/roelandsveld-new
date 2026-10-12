#!/usr/bin/env python3
import json
from pathlib import Path

source_folder = Path("content/news-posts")
output_file = Path("content/news/index.json")
items = []

for path in source_folder.glob("*.json"):
    try:
        item = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        continue
    if not item.get("title") or not item.get("slug"):
        continue
    item.setdefault("image", "")
    item.setdefault("image_alt", "")
    item.setdefault("summary", "")
    item.setdefault("category", "Clubnieuws")
    item.setdefault("date", "")
    items.append(item)

items.sort(key=lambda item: item.get("date", ""), reverse=True)
output_file.parent.mkdir(parents=True, exist_ok=True)
output_file.write_text(json.dumps(items, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
