/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kavushion.vercel.app', // Ganti dengan domain kamu
  generateRobotsTxt: true, // juga otomatis buat robots.txt
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
};
