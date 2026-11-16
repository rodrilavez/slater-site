// Home page code.
// The Slater site (custom element #customElement1) raises a 'signup' event when a fan submits the form.
// We pass it to the backend, which talks to Laylo, and hand the answer back to the element.
// We also ask the backend for the DICE event details and hand them to the element for the Tour card.

import { subscribeFan } from 'backend/laylo.web';
import { getDiceEvent } from 'backend/dice.web';

$w.onReady(function () {
    const site = $w('#customElement1');

    site.on('signup', async (event) => {
        const { id, email, phone } = event.detail || {};
        let result = { id, ok: false };
        try {
            result = Object.assign({ id }, await subscribeFan(email, phone));
        } catch (err) {
            result.error = 'backend';
        }
        site.setAttribute('signup-result', JSON.stringify(result));
    });

    getDiceEvent()
        .then((ev) => { if (ev && ev.live) site.setAttribute('dice-event', JSON.stringify(ev)); })
        .catch(() => {});
});
