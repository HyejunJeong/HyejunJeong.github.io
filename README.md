# Personal Academic Website

This is the Jekyll-based personal academic website for Hyejun Jeong, PhD student at University of Massachusetts Amherst.

## Setup Instructions

### Local Development

1. **Install Ruby and Jekyll**
   ```bash
   # Install Ruby (if not already installed)
   # On macOS with Homebrew:
   brew install ruby
   
   # Install Jekyll and bundler
   gem install jekyll bundler
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run locally**
   ```bash
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000` to view your site.

### GitHub Pages Deployment

1. **Create a new repository**
   - Create a new repository named `[your-username].github.io`
   - Or create any repository and use the `gh-pages` branch

2. **Push your code**
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/[your-username]/[your-username].github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section  
   - Select source as "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Your site will be available at `https://[your-username].github.io`

## Customization

### Essential Updates Needed:

1. **_config.yml**: Update all personal information, URLs, and social media handles
2. **Content**: Replace placeholder content in all `.md` files with your actual information
3. **Profile Image**: Add your photo to `/assets/images/profile.jpg`
4. **CV**: Add your actual CV PDF to `/assets/cv.pdf`
5. **Publications**: Update the publications page with your actual papers
6. **Research**: Describe your actual research projects and interests

### File Structure:
```
├── _config.yml          # Site configuration
├── _layouts/            # HTML templates
├── _includes/           # Reusable HTML components
├── assets/              # CSS, images, and other assets
├── index.md             # Home page
├── research.md          # Research page
├── publications.md      # Publications page
├── projects.md          # Projects page
├── cv.md               # CV page
├── contact.md          # Contact page
├── Gemfile             # Ruby dependencies
└── README.md           # This file
```

## Adding Content

### Publications
Edit `publications.md` and add your papers in the provided format.

### Research Projects  
Update `research.md` with your current and past research projects.

### News Updates
Add recent news to the "Recent News" section on the home page (`index.md`).

## Support

For Jekyll documentation: https://jekyllrb.com/docs/
For GitHub Pages: https://docs.github.com/en/pages