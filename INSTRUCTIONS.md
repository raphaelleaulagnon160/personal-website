# Website Setup Instructions

## Adding Your Profile Picture

To add your profile picture to the main page:

1. **Save your photo** in the `personal_website` folder (e.g., as `profile.jpg`)

2. **Update index.html** - Replace lines with the photo placeholder:

Replace:
```html
<div class="photo-placeholder">
  <span>Photo</span>
</div>
```

With:
```html
<img src="profile.jpg" alt="Raphaelle Aulagnon" class="profile-photo">
```

3. **Add this CSS** to `styles.css` (replace `.photo-placeholder` styles):

```css
.profile-photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 8px 24px rgba(47, 75, 124, 0.15);
}
```

## Adding Paper Links

To add links to your papers on the research page:

1. Open `research.html`
2. Find the paper you want to add a link to
3. In the `paper__links` div, add:

```html
<a href="YOUR_PAPER_URL" class="paper__link" target="_blank" rel="noopener">
  📄 Paper
</a>
```

You can also add:
- `📝 Policy Memo` links
- `📊 Blog Post` links
- `💻 Code` links

Example:
```html
<div class="paper__links">
  <a href="paper_url" class="paper__link" target="_blank" rel="noopener">
    📄 Paper
  </a>
  <a href="blog_url" class="paper__link" target="_blank" rel="noopener">
    📊 Blog
  </a>
  <span class="paper__status paper__status--published">Published (2024)</span>
</div>
```

## Tech-Focused Highlights

The website now emphasizes:
- ✅ **AI & Machine Learning** research (separate section)
- ✅ **Methods** highlighted for each paper (RCT, ML, etc.)
- ✅ **Published work** shown first (credibility)
- ✅ **Modern, clean design** suitable for tech roles
- ✅ **Clear paper descriptions** showing impact

## Customization Tips

### Colors
Edit CSS variables in `styles.css`:
- `--accent`: Main blue color (currently #2f4b7c)
- `--highlight`: Accent orange (currently #d65a31)

### Content
- Add blog/Medium links to papers
- Update email/LinkedIn
- Add GitHub or portfolio links

## Viewing Locally

Open `index.html` in your browser to preview changes.
