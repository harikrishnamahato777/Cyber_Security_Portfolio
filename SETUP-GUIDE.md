# 🚀 QUICK START GUIDE

## Step-by-Step Setup Instructions

### 1️⃣ Install Node.js (if not installed)

**Check if Node.js is installed:**
```bash
node --version
```

If not installed, download from: https://nodejs.org/ (LTS version recommended)

### 2️⃣ Navigate to Project Folder

```bash
cd cybersecurity-portfolio
```

### 3️⃣ Install Dependencies

```bash
npm install
```

This will install all required packages (~2-3 minutes).

### 4️⃣ Run Development Server

```bash
npm run dev
```

Open browser and go to: **http://localhost:3000**

You should see your portfolio! 🎉

---

## 🔧 IMPORTANT: Configure Before Deploying

### A. Setup Contact Form (REQUIRED)

The contact form won't work until you configure Formspree:

1. **Create Formspree Account**
   - Go to: https://formspree.io/
   - Sign up (it's free)
   - Click "New Form"
   - Give it a name (e.g., "Portfolio Contact")
   - Copy the form endpoint

2. **Update Contact Component**
   - Open: `components/Contact.tsx`
   - Find line 39: `https://formspree.io/f/XXXXXXX`
   - Replace `XXXXXXX` with your form ID

   **Example:**
   ```typescript
   // Before
   const response = await fetch('https://formspree.io/f/XXXXXXX', {
   
   // After (with your actual form ID)
   const response = await fetch('https://formspree.io/f/abc123xyz', {
   ```

3. **Test the Form**
   - Run `npm run dev`
   - Fill out the contact form
   - Check your email for the test message

### B. Update Project Demo Links

In `components/Projects.tsx`, update these URLs with your actual deployed project links:

```typescript
// Line ~8 and ~16
demo: 'https://your-actual-demo-url.com',
```

### C. Add Your Resume (Optional)

1. Add `resume.pdf` to the `/public` folder
2. Update resume links in:
   - `components/Navbar.tsx` (line ~60)
   - `components/Hero.tsx` (line ~52)

Change from:
```typescript
href="#contact"
```

To:
```typescript
href="/resume.pdf" download
```

---

## 🌐 DEPLOY TO VERCEL

### Option 1: Deploy via GitHub (Easiest)

**Step 1: Create GitHub Repository**
```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Step 2: Deploy on Vercel**
1. Go to https://vercel.com
2. Click "Sign Up" or "Login" (use GitHub)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js)
6. Wait 2-3 minutes ✅

Your site is now live! Example: `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts, then done!
```

---

## ✅ POST-DEPLOYMENT CHECKLIST

After deploying, verify:

- [ ] All sections are visible
- [ ] Navigation links work
- [ ] Contact form works (send test message)
- [ ] Project links go to correct URLs
- [ ] Resume download works (if added)
- [ ] Site looks good on mobile
- [ ] Site loads fast

---

## 🎨 CUSTOMIZATION TIPS

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  cyber: {
    cyan: '#00ffff',    // Your primary color
    green: '#00ff88',   // Your secondary color
    purple: '#a855f7',  // Accent color
  },
}
```

### Change Content

Each section is in its own component file:
- Hero: `components/Hero.tsx`
- About: `components/About.tsx`
- Skills: `components/Skills.tsx`
- Projects: `components/Projects.tsx`
- etc.

Just edit the text/data in these files!

---

## 🆘 TROUBLESHOOTING

### "Module not found" Error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Form Not Working
- Check Formspree form ID is correct
- Check your Formspree account is active
- Look for errors in browser console (F12)

### Site Not Loading on Vercel
- Check build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Try redeploying

### Styling Looks Wrong
```bash
npm run build
# Check for any Tailwind errors
```

---

## 📞 NEED HELP?

1. Read the full README.md
2. Check Next.js docs: https://nextjs.org/docs
3. Check Vercel docs: https://vercel.com/docs
4. Check Formspree help: https://help.formspree.io/

---

## 🎯 FINAL STEPS

1. ✅ Install dependencies: `npm install`
2. ✅ Run locally: `npm run dev`
3. ✅ Setup Formspree form
4. ✅ Update project demo links
5. ✅ Add resume PDF (optional)
6. ✅ Test everything locally
7. ✅ Push to GitHub
8. ✅ Deploy on Vercel
9. ✅ Test live site
10. ✅ Share your portfolio! 🚀

---

**Good luck with your cybersecurity career! 🛡️**
