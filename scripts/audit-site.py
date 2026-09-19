from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
root=Path('dist'); errors=[]; forms=set()
class Page(HTMLParser):
 def __init__(self):
  super().__init__(); self.tags=[]
 def handle_starttag(self,tag,attrs): self.tags.append((tag,dict(attrs)))
pages=list(root.rglob('*.html'))
for file in pages:
 p=Page();p.feed(file.read_text()); tags=p.tags
 if sum(t=='h1' for t,a in tags)!=1: errors.append(f'{file}: expected one h1')
 for label,pred in [('description',lambda t,a:t=='meta' and a.get('name')=='description' and a.get('content')),('canonical',lambda t,a:t=='link' and a.get('rel')=='canonical'),('main',lambda t,a:a.get('id')=='main-content')]:
  if not any(pred(t,a) for t,a in tags): errors.append(f'{file}: missing {label}')
 for tag,a in tags:
  if tag=='form': forms.add(a.get('action',''))
  href=a.get('href','') if tag=='a' else a.get('src','') if tag=='img' else ''
  if href.startswith('/') and not href.startswith('//'):
   path=root / unquote(urlsplit(href).path).lstrip('/')
   if not(path.is_file() or (path/'index.html').is_file()): errors.append(f'{file}: missing {href}')
print(f'Audited {len(pages)} pages; {len(errors)} errors.')
for e in sorted(set(errors)): print(e)
print('Form endpoints requiring a backend:', ', '.join(sorted(forms)))
raise SystemExit(bool(errors))
