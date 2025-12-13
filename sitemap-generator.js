const fs = require('fs');
const path = require('path');

const routesFile = path.join(__dirname, 'routes.txt');
const sitemapFile = path.join(__dirname, 'src/sitemap.xml');
const baseUrl = 'https://www.iamrv.pro';

fs.readFile(routesFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading routes.txt:', err);
        return;
    }

    const routes = data.split('\n').filter(route => route.trim() !== '');

    // Add home page
    routes.unshift('/');

    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    routes.forEach(route => {
        sitemap += '  <url>\n';
        sitemap += `    <loc>${baseUrl}${route.trim()}</loc>\n`;
        sitemap += '    <changefreq>weekly</changefreq>\n';
        sitemap += '    <priority>0.8</priority>\n';
        sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';

    fs.writeFile(sitemapFile, sitemap, (err) => {
        if (err) {
            console.error('Error writing sitemap.xml:', err);
        } else {
            console.log('sitemap.xml generated successfully!');
        }
    });
});
