# Cybersecurity Portfolio - Hari Krishna Mahato

A modern, dark-theme cybersecurity portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 Modern dark cyber aesthetic with glassmorphism effects
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🔒 Contact form with Formspree integration
- 🎯 SEO optimized
- ♿ Accessible design
- 🚀 Ready to deploy on Vercel

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Form Handling:** Formspree
- **Deployment:** Vercel

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup Steps

1. **Clone or download this project**

```bash
cd cybersecurity-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

4. **Open in browser**

Visit `http://localhost:3000` to see your portfolio.

## 🔧 Configuration

### 1. Update Personal Information

Edit the following files to add your information:

- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section
- `components/Projects.tsx` - Your projects with GitHub and live demo links
- `components/Education.tsx` - Educational background
- `components/Contact.tsx` - Contact information

### 2. Setup Contact Form (Formspree)

The contact form uses Formspree for handling submissions without a backend.

**Steps to set up:**

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xyzabcde`)
5. In `components/Contact.tsx`, replace line 39:

```typescript
const response = await fetch('https://formspree.io/f/XXXXXXX', {
```

Replace `XXXXXXX` with your actual Formspree form ID.

**Example:**
```typescript
const response = await fetch('https://formspree.io/f/xyzabcde', {
```

**Formspree Features Included:**
- ✅ Spam protection with honeypot field
- ✅ Email validation
- ✅ Success/error messages
- ✅ Form reset on success
- ✅ Loading state
- ✅ Fallback email link

### 3. Update Project Links

In `components/Projects.tsx`, update the demo URLs:

```typescript
demo: 'https://your-actual-demo-url.com',
```

### 4. Add Resume File

To add a downloadable resume:

1. Add your resume PDF to the `/public` folder (e.g., `resume.pdf`)
2. Update the resume links in:
   - `components/Navbar.tsx` (line with Download Resume button)
   - `components/Hero.tsx` (Download Resume CTA)

Change from:
```typescript
<a href="#contact" ...>
```

To:
```typescript
<a href="/resume.pdf" download ...>
```

## 🚀 Deployment on Vercel

### Method 1: Deploy via GitHub (Recommended)

1. **Push code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

2. **Deploy on Vercel**

- Go to [https://vercel.com](https://vercel.com)
- Sign up/login with GitHub
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect Next.js settings
- Click "Deploy"

3. **Done!** Your site will be live in ~2 minutes.

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Login to Vercel**

```bash
vercel login
```

3. **Deploy**

```bash
vercel
```

Follow the prompts and your site will be deployed.

### Method 3: Drag and Drop

1. Build your project locally:

```bash
npm run build
```

2. Go to [https://vercel.com/new](https://vercel.com/new)
3. Drag and drop the `.next` folder
4. Deploy!

## 🌐 Custom Domain (Optional)

After deploying on Vercel:

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed by Vercel
5. Wait for SSL certificate to be issued (automatic)

## 📝 Environment Variables

If you want to keep your Formspree endpoint private:

1. Create `.env.local` file in root:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/XXXXXXX
```

2. Update `components/Contact.tsx`:

```typescript
const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
```

3. Add this environment variable in Vercel:
   - Go to Project Settings → Environment Variables
   - Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` with your value

## 🎨 Customization

### Colors

Edit colors in `tailwind.config.js`:

```javascript
colors: {
  cyber: {
    black: '#0a0e1a',
    dark: '#111827',
    slate: '#1e293b',
    cyan: '#00ffff',    // Change to your preferred color
    green: '#00ff88',   // Change to your preferred color
    purple: '#a855f7',  // Change to your preferred color
    pink: '#ff006e',    // Change to your preferred color
  },
}
```

### Fonts

The project uses:
- **Display:** Syne (headings)
- **Body:** DM Sans (paragraphs)
- **Mono:** JetBrains Mono (code/technical text)

To change fonts, update in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

And update `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Body Font', 'system-ui', 'sans-serif'],
  display: ['Your Display Font', 'system-ui', 'sans-serif'],
}
```

## 📁 Project Structure

```
cybersecurity-portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── About.tsx            # About section
│   ├── Background.tsx       # Animated background
│   ├── Certificates.tsx     # Certificates section
│   ├── Contact.tsx          # Contact form
│   ├── CyberLearning.tsx    # Learning section
│   ├── Education.tsx        # Education section
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero section
│   ├── Navbar.tsx           # Navigation
│   ├── Projects.tsx         # Projects section
│   ├── Skills.tsx           # Skills section
│   └── Training.tsx         # Training section
├── public/                  # Static files (add resume here)
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🐛 Troubleshooting

### Issue: Form not working
- Check that you've replaced `XXXXXXX` with your actual Formspree form ID
- Verify your Formspree account is active
- Check browser console for errors

### Issue: Images not loading
- Ensure images are in the `/public` folder
- Use paths like `/image.jpg` (not `./image.jpg`)

### Issue: Build fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

## 📞 Support

If you need help:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Vercel documentation](https://vercel.com/docs)
3. Visit [Formspree documentation](https://help.formspree.io/)

## 📄 License

This project is open source and available for personal use.

---

Built with ❤️ for cybersecurity and continuous learning.
