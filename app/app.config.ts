export default defineAppConfig({
  title: 'Godil',
  email: 'kontak@aidilaryanto.id',
  github: 'https://github.com/aidilaryanto/sink',
  twitter: 'https://s.aidilaryanto.id/x',
  telegram: 'https://s.aidilaryanto.id/telegram',
  mastodon: 'https://sink.cool/mastodon',
  blog: 'https://s.aidilaryanto.id/portfolio',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
