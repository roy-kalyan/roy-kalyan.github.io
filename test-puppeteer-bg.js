const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  const pagesToTest = [
    { name: 'Publications List', url: 'http://192.168.68.55:4000/publications/' },
    { name: 'Publication Detail', url: 'http://192.168.68.55:4000/publication/2024-fpce' }
  ];

  for (const p of pagesToTest) {
    console.log(`\nTesting page: ${p.name}`);
    await page.goto(p.url, { waitUntil: 'networkidle2' });

    const styles = await page.evaluate(() => {
      const htmlStyle = window.getComputedStyle(document.documentElement);
      const bodyStyle = window.getComputedStyle(document.body);
      const mainEl = document.getElementById('main');
      const mainStyle = mainEl ? window.getComputedStyle(mainEl) : null;
      const footerEl = document.querySelector('.page__footer');
      const footerStyle = footerEl ? window.getComputedStyle(footerEl) : null;

      return {
        htmlBg: htmlStyle.backgroundColor,
        bodyBg: bodyStyle.backgroundColor,
        mainBg: mainStyle ? mainStyle.backgroundColor : 'N/A',
        footerBg: footerStyle ? footerStyle.backgroundColor : 'N/A',
        bodyMargin: bodyStyle.margin,
        mainWidth: mainEl ? mainEl.offsetWidth : 0,
        bodyWidth: document.body.offsetWidth
      };
    });

    console.log(`  HTML background: ${styles.htmlBg}`);
    console.log(`  Body background: ${styles.bodyBg}`);
    console.log(`  #main background: ${styles.mainBg}`);
    console.log(`  .page__footer background: ${styles.footerBg}`);
    console.log(`  Body width: ${styles.bodyWidth}px, #main width: ${styles.mainWidth}px`);
  }

  await browser.close();
})();
