// Reads the Slater DICE event (date, venue, city) from its public DICE page.
// Until the page is live DICE answers 404, and we return { live: false } so the site keeps its ??? placeholders.
import { Permissions, webMethod } from 'wix-web-module';
import { fetch } from 'wix-fetch';

const EVENT_URL = 'https://dice.fm/event/ok2nqa';

const pick = (html, prop) => {
  const m = html.match(new RegExp(`<meta[^>]+property="${prop}"[^>]+content="([^"]*)"`, 'i'));
  return m ? m[1].replace(/&amp;/g, '&') : '';
};

export const getDiceEvent = webMethod(Permissions.Anyone, async () => {
  try {
    const res = await fetch(EVENT_URL, {
      method: 'get',
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36', 'Accept-Language': 'en-US' }
    });
    if (!res.ok) return { live: false, status: res.status };
    const html = await res.text();

    // DICE puts the event in a schema.org MusicEvent block
    let ev = null;
    for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
      try {
        const j = JSON.parse(m[1]);
        const list = Array.isArray(j) ? j : [j];
        ev = list.find(x => x && /Event$/.test(String(x['@type']))) || ev;
      } catch (e) { /* skip blocks that are not JSON */ }
      if (ev) break;
    }
    if (!ev) {
      const title = pick(html, 'og:title');
      return title ? { live: true, name: title.split('|')[0].replace(/Tickets\s*$/i, '').trim(), image: pick(html, 'og:image') } : { live: false };
    }
    const loc = ev.location || {}, addr = loc.address || {};
    return {
      live: true,
      name: ev.name || '',
      startDate: ev.startDate || '',
      venue: loc.name || '',
      city: addr.addressLocality || '',
      region: addr.addressRegion || addr.addressCountry || '',
      image: Array.isArray(ev.image) ? ev.image[0] : (ev.image || ''),
      soldOut: /SoldOut/i.test(JSON.stringify(ev.offers || ''))
    };
  } catch (err) {
    return { live: false, error: String(err && err.message || err) };
  }
});
