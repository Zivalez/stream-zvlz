# stream-zvlz

A fast, static Markdown viewer built with [Astro](https://astro.build) and deployed on Cloudflare Pages.
It fetches the Markdown content directly from an R2 bucket at build-time, producing a zero-JS static HTML page styled with GitHub's Markdown CSS.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Cloudflare Pages Deployment Workflow

This project is tailored to be deployed seamlessly on **Cloudflare Pages** using Git integration.

1. **Push to GitHub**:
   Commit your changes and push this repository to GitHub.

2. **Connect Git to Cloudflare**:
   - Go to your Cloudflare Dashboard.
   - Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Select the newly created GitHub repository.

3. **Configure Build Settings**:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables (optional)**: Define `MD_URL` if you want to override the default source URL.

4. **Deploy**:
   - Save and Deploy. Cloudflare will automatically trigger a new deployment and build the static HTML every time you push to the `main` branch.
   - You can also configure your custom domain (`stream.zvlz.my.id`) in the Custom Domains tab of your Pages project. SSL is handled automatically by Cloudflare.
