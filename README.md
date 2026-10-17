# Developer Portfolio (React)

Vite + React rebuild of the Week 01/02 profile page.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run deploy   # publish dist/ to the gh-pages branch (GitHub Pages)
```

## Structure

```
src/
  data.js            all content (profile, skills, projects)
  App.jsx            theme state, composes the page
  components/
    Navbar.jsx       sidebar / mobile menu, theme toggle
    Section.jsx      shared section wrapper
    Hero.jsx  About.jsx  Skills.jsx
    Projects.jsx     category filter (state)
    ProjectCard.jsx  one card, fed by props
    Contact.jsx      controlled form
```

To add a project or skill, edit `src/data.js` only.
