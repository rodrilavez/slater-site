// src/backend/laylo.web.js
// Signs a fan up to Slater's Laylo. Runs on Wix's servers, so the Laylo API key never reaches the browser.
// Setup: in the Wix dashboard, Developer Tools > Secrets Manager, add a secret named LAYLO_API_KEY
// with the key from Laylo > Settings > Integrations > API Keyring.

import { Permissions, webMethod } from 'wix-web-module';
import { getSecret } from 'wix-secrets-backend';
import { fetch } from 'wix-fetch';

const MUTATION = 'mutation($email: String, $phoneNumber: String) { subscribeToUser(email: $email, phoneNumber: $phoneNumber) }';

export const subscribeFan = webMethod(Permissions.Anyone, async (email, phone) => {
  const variables = {};
  if (typeof phone === 'string' && /^\+\d{8,15}$/.test(phone)) variables.phoneNumber = phone;
  else if (typeof email === 'string' && email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) variables.email = email.trim();
  else return { ok: false, error: 'invalid' };

  const key = await getSecret('LAYLO_API_KEY');
  if (!key) return { ok: false, error: 'missing-key' };

  const res = await fetch('https://laylo.com/api/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({ query: MUTATION, variables })
  });
  if (!res.ok) return { ok: false, error: `http-${res.status}` };
  const json = await res.json();
  if (json.errors && json.errors.length) return { ok: false, error: 'laylo' };
  return { ok: json.data && json.data.subscribeToUser === true };
});
