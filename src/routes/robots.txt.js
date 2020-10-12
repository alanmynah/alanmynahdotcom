const robots = [`UserAgent: '*'`, `Disallow: '/wp-login.php'`, `Disallow: '/*/wp-includes/*'`, `Disallow: '/ads.txt`];

export function get(req, res) {
	res.setHeader('Content-Type', 'text/plain');

	const content = robots.join('\n');

	res.end(content);
}
