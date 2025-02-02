# Custom Start Page 🚀

An elegant and minimalist homepage for your browser, built with SvelteKit. This page allows you to quickly access your favorite websites and perform efficient searches.

## ✨ Features

- 🔍 Integrated search bar using Qwant
- 📦 Quick Nix package search with the `!nx` command
- 🎯 Customizable quick links organized by categories
- 🎨 Clean design inspired by [morgane.dev](https://morgane.dev)

## 🚀 Installation

1. Fork this repository and rename it exactly as: `<your-github-username>.github.io`
   > ⚠️ The name is case-sensitive and must exactly match your GitHub username

2. Customize your links in the `src/routes/+layout.svelte` file
   - Remove links you don't use
   - Add your own links
   - Organize them according to your preferred categories

3. Deploy your page:
   ```bash
   ./deploy.sh
   ```

## 🔧 Browser Configuration

To use this page as a start page in Firefox:
1. Install the [New Tab Override](https://addons.mozilla.org/de/firefox/addon/new-tab-override/) extension
2. Configure the URL to point to your deployed version

## 📸 Preview

![Website screenshot](https://morgane.dev/uploads/8uspm7r8p3.png)

## 🙏 Credits

- Search bar design adapted from [Lucas Oliveira's work on codepen.io](https://codepen.io/lucasyem/pen/ZEEYKdj)
- Style and fonts inspired by [morgane.dev](https://morgane.dev)

## 📝 License

This project is open source and can be freely modified for your personal use.
