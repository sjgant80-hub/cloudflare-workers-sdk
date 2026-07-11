/**
 * cloudflare-workers-sdk · sovereign wrapper for Cloudflare Workers
 * Serverless
 *
 * Auto-generated from OpenAPI spec · 2026-07-11
 * 100 endpoints wrapped · spec version 4.0.0
 *
 * Docs (upstream): https://developers.cloudflare.com/workers/
 * Homepage: https://workers.cloudflare.com
 */

export class CloudflareWorkers {
  constructor({ apiKey, baseURL = 'https://api.cloudflare.com/client/v4', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** GET /accounts · List Accounts */
  async accountsListAccounts(params = {}) {
    let path = '/accounts'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts · Create an account */
  async accountCreation(params = {}) {
    let path = '/accounts'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/move · Batch move accounts */
  async accountsBatchMoveAccounts(params = {}) {
    let path = '/accounts/move'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_identifier}/custom_pages · List custom pages */
  async customPagesForAnAccountListCustomPages(params = {}) {
    let path = '/accounts/{account_identifier}/custom_pages'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_identifier}/custom_pages/assets · List custom assets */
  async customAssetsForAnAccountListCustomAssets(params = {}) {
    let path = '/accounts/{account_identifier}/custom_pages/assets'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_identifier}/custom_pages/assets · Create a custom asset */
  async customAssetsForAnAccountCreateACustomAsset(params = {}) {
    let path = '/accounts/{account_identifier}/custom_pages/assets'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_identifier}/custom_pages/assets/{asset_name} · Get a custom asset */
  async customAssetsForAnAccountGetACustomAsset(params = {}) {
    let path = '/accounts/{account_identifier}/custom_pages/assets/{asset_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_identifier}/custom_pages/assets/{asset_name} · Update a custom asset */
  async customAssetsForAnAccountUpdateACustomAsset(params = {}) {
    let path = '/accounts/{account_identifier}/custom_pages/assets/{asset_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_identifier}/custom_pages/assets/{asset_name} · Delete a custom asset */
  async customAssetsForAnAccountDeleteACustomAsset(params = {}) {
    let path = '/accounts/{account_identifier}/custom_pages/assets/{asset_name}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_identifier}/custom_pages/preview_tokens · Create a preview token */
  async customPagesForAnAccountCreatePreviewToken(params = {}) {
    let path = '/accounts/{account_identifier}/custom_pages/preview_tokens'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_identifier}/custom_pages/{identifier} · Get a custom page */
  async customPagesForAnAccountGetACustomPage(params = {}) {
    let path = '/accounts/{account_identifier}/custom_pages/{identifier}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_identifier}/custom_pages/{identifier} · Update a custom page */
  async customPagesForAnAccountUpdateACustomPage(params = {}) {
    let path = '/accounts/{account_identifier}/custom_pages/{identifier}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id} · Account Details */
  async accountsAccountDetails(params = {}) {
    let path = '/accounts/{account_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id} · Update Account */
  async accountsUpdateAccount(params = {}) {
    let path = '/accounts/{account_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id} · Delete a specific account */
  async accountDeletion(params = {}) {
    let path = '/accounts/{account_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/abuse-reports · List abuse reports */
  async listAbuseReports(params = {}) {
    let path = '/accounts/{account_id}/abuse-reports'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/abuse-reports/{report_id}/emails · List abuse report emails */
  async listEmails(params = {}) {
    let path = '/accounts/{account_id}/abuse-reports/{report_id}/emails'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/abuse-reports/{report_id}/mitigations · List abuse report mitigations */
  async listMitigations(params = {}) {
    let path = '/accounts/{account_id}/abuse-reports/{report_id}/mitigations'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/abuse-reports/{report_id}/mitigations/appeal · Request review on mitigations */
  async requestReview(params = {}) {
    let path = '/accounts/{account_id}/abuse-reports/{report_id}/mitigations/appeal'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/abuse-reports/{report_param} · Abuse Report Details */
  async getAbuseReport(params = {}) {
    let path = '/accounts/{account_id}/abuse-reports/{report_param}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/abuse-reports/{report_param} · Submit an abuse report */
  async submitAbuseReport(params = {}) {
    let path = '/accounts/{account_id}/abuse-reports/{report_param}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/ai-controls/mcp/portals · List MCP Portals */
  async mcpPortalsApiListPortals(params = {}) {
    let path = '/accounts/{account_id}/access/ai-controls/mcp/portals'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/ai-controls/mcp/portals · Create a new MCP Portal */
  async mcpPortalsApiCreatePortals(params = {}) {
    let path = '/accounts/{account_id}/access/ai-controls/mcp/portals'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/ai-controls/mcp/portals/{id} · Read details of an MCP Portal */
  async mcpPortalsApiFetchGateways(params = {}) {
    let path = '/accounts/{account_id}/access/ai-controls/mcp/portals/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/ai-controls/mcp/portals/{id} · Update a MCP Portal */
  async mcpPortalsApiUpdatePortals(params = {}) {
    let path = '/accounts/{account_id}/access/ai-controls/mcp/portals/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id}/access/ai-controls/mcp/portals/{id} · Delete a MCP Portal */
  async mcpPortalsApiDeletePortals(params = {}) {
    let path = '/accounts/{account_id}/access/ai-controls/mcp/portals/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/ai-controls/mcp/servers · List MCP Servers */
  async mcpPortalsApiListServers(params = {}) {
    let path = '/accounts/{account_id}/access/ai-controls/mcp/servers'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/ai-controls/mcp/servers · Create a new MCP Server */
  async mcpPortalsApiCreateServers(params = {}) {
    let path = '/accounts/{account_id}/access/ai-controls/mcp/servers'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/ai-controls/mcp/servers/{id} · Read the details of a MCP Server */
  async mcpPortalsApiFetchServers(params = {}) {
    let path = '/accounts/{account_id}/access/ai-controls/mcp/servers/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/ai-controls/mcp/servers/{id} · Update a MCP Server */
  async mcpPortalsApiUpdateServers(params = {}) {
    let path = '/accounts/{account_id}/access/ai-controls/mcp/servers/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id}/access/ai-controls/mcp/servers/{id} · Delete a MCP Server */
  async mcpPortalsApiDeleteServers(params = {}) {
    let path = '/accounts/{account_id}/access/ai-controls/mcp/servers/{id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/ai-controls/mcp/servers/{id}/sync · Sync MCP Server Capabilities */
  async mcpPortalsApiSyncServer(params = {}) {
    let path = '/accounts/{account_id}/access/ai-controls/mcp/servers/{id}/sync'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/apps · List Access applications */
  async accessApplicationsListAccessApplications(params = {}) {
    let path = '/accounts/{account_id}/access/apps'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/apps · Add an Access application */
  async accessApplicationsAddAnApplication(params = {}) {
    let path = '/accounts/{account_id}/access/apps'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/apps/ca · List short-lived certificate CAs */
  async accessShortLivedCertificateCAsListShortLivedCertificateCAs(params = {}) {
    let path = '/accounts/{account_id}/access/apps/ca'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/apps/{app_id} · Get an Access application */
  async accessApplicationsGetAnAccessApplication(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/apps/{app_id} · Update an Access application */
  async accessApplicationsUpdateAnAccessApplication(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id}/access/apps/{app_id} · Delete an Access application */
  async accessApplicationsDeleteAnAccessApplication(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/apps/{app_id}/ca · Get a short-lived certificate CA */
  async accessShortLivedCertificateCAsGetAShortLivedCertificateCa(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/ca'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/apps/{app_id}/ca · Create a short-lived certificate CA */
  async accessShortLivedCertificateCAsCreateAShortLivedCertificateCa(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/ca'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id}/access/apps/{app_id}/ca · Delete a short-lived certificate CA */
  async accessShortLivedCertificateCAsDeleteAShortLivedCertificateCa(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/ca'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/apps/{app_id}/policies · List Access application policies */
  async accessPoliciesListAccessAppPolicies(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/policies'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/apps/{app_id}/policies · Create an Access application policy */
  async accessPoliciesCreateAnAccessPolicy(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/policies'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/apps/{app_id}/policies/{policy_id} · Get an Access application policy */
  async accessPoliciesGetAnAccessPolicy(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/apps/{app_id}/policies/{policy_id} · Update an Access application policy */
  async accessPoliciesUpdateAnAccessPolicy(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id}/access/apps/{app_id}/policies/{policy_id} · Delete an Access application policy */
  async accessPoliciesDeleteAnAccessPolicy(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}/make_reusable · Convert an Access application policy to a reusable policy */
  async accessPoliciesConvertReusable(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}/make_reusable'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/apps/{app_id}/revoke_tokens · Revoke application tokens */
  async accessApplicationsRevokeServiceTokens(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/revoke_tokens'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/apps/{app_id}/settings · Update Access application settings */
  async accessApplicationsPutUpdateAccessApplicationSettings(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/settings'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PATCH /accounts/{account_id}/access/apps/{app_id}/settings · Update Access application settings */
  async accessApplicationsPatchUpdateAccessApplicationSettings(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/settings'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PATCH', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/apps/{app_id}/user_policy_checks · Test Access policies */
  async accessApplicationsTestAccessPolicies(params = {}) {
    let path = '/accounts/{account_id}/access/apps/{app_id}/user_policy_checks'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/authenticator_device_aaguids · List authenticator device AAGUIDs */
  async accessAuthenticatorDeviceAaguidsList(params = {}) {
    let path = '/accounts/{account_id}/access/authenticator_device_aaguids'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/bookmarks · List Bookmark applications */
  async accessBookmarkApplicationsDeprecatedListBookmarkApplications(params = {}) {
    let path = '/accounts/{account_id}/access/bookmarks'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/bookmarks/{bookmark_id} · Get a Bookmark application */
  async accessBookmarkApplicationsDeprecatedGetABookmarkApplication(params = {}) {
    let path = '/accounts/{account_id}/access/bookmarks/{bookmark_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/bookmarks/{bookmark_id} · Create a Bookmark application */
  async accessBookmarkApplicationsDeprecatedCreateABookmarkApplication(params = {}) {
    let path = '/accounts/{account_id}/access/bookmarks/{bookmark_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/bookmarks/{bookmark_id} · Update a Bookmark application */
  async accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication(params = {}) {
    let path = '/accounts/{account_id}/access/bookmarks/{bookmark_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id}/access/bookmarks/{bookmark_id} · Delete a Bookmark application */
  async accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication(params = {}) {
    let path = '/accounts/{account_id}/access/bookmarks/{bookmark_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/certificates · List mTLS certificates */
  async accessMtlsAuthenticationListMtlsCertificates(params = {}) {
    let path = '/accounts/{account_id}/access/certificates'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/certificates · Add an mTLS certificate */
  async accessMtlsAuthenticationAddAnMtlsCertificate(params = {}) {
    let path = '/accounts/{account_id}/access/certificates'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/certificates/settings · List all mTLS hostname settings */
  async accessMtlsAuthenticationListMtlsCertificatesHostnameSettings(params = {}) {
    let path = '/accounts/{account_id}/access/certificates/settings'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/certificates/settings · Update an mTLS certificate's hostname settings */
  async accessMtlsAuthenticationUpdateAnMtlsCertificateSettings(params = {}) {
    let path = '/accounts/{account_id}/access/certificates/settings'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/certificates/{certificate_id} · Get an mTLS certificate */
  async accessMtlsAuthenticationGetAnMtlsCertificate(params = {}) {
    let path = '/accounts/{account_id}/access/certificates/{certificate_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/certificates/{certificate_id} · Update an mTLS certificate */
  async accessMtlsAuthenticationUpdateAnMtlsCertificate(params = {}) {
    let path = '/accounts/{account_id}/access/certificates/{certificate_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id}/access/certificates/{certificate_id} · Delete an mTLS certificate */
  async accessMtlsAuthenticationDeleteAnMtlsCertificate(params = {}) {
    let path = '/accounts/{account_id}/access/certificates/{certificate_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/custom_pages · List custom pages */
  async accessCustomPagesListCustomPages(params = {}) {
    let path = '/accounts/{account_id}/access/custom_pages'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/custom_pages · Create a custom page */
  async accessCustomPagesCreateACustomPage(params = {}) {
    let path = '/accounts/{account_id}/access/custom_pages'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/custom_pages/{custom_page_id} · Get a custom page */
  async accessCustomPagesGetACustomPage(params = {}) {
    let path = '/accounts/{account_id}/access/custom_pages/{custom_page_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/custom_pages/{custom_page_id} · Update a custom page */
  async accessCustomPagesUpdateACustomPage(params = {}) {
    let path = '/accounts/{account_id}/access/custom_pages/{custom_page_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id}/access/custom_pages/{custom_page_id} · Delete a custom page */
  async accessCustomPagesDeleteACustomPage(params = {}) {
    let path = '/accounts/{account_id}/access/custom_pages/{custom_page_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/gateway_ca · List SSH Certificate Authorities (CA) */
  async accessGatewayCaListSSHCa(params = {}) {
    let path = '/accounts/{account_id}/access/gateway_ca'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/gateway_ca · Add a new SSH Certificate Authority (CA) */
  async accessGatewayCaAddAnSSHCa(params = {}) {
    let path = '/accounts/{account_id}/access/gateway_ca'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id}/access/gateway_ca/{certificate_id} · Delete an SSH Certificate Authority (CA) */
  async accessGatewayCaDeleteAnSSHCa(params = {}) {
    let path = '/accounts/{account_id}/access/gateway_ca/{certificate_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/groups · List Access groups */
  async accessGroupsListAccessGroups(params = {}) {
    let path = '/accounts/{account_id}/access/groups'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/groups · Create an Access group */
  async accessGroupsCreateAnAccessGroup(params = {}) {
    let path = '/accounts/{account_id}/access/groups'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/groups/{group_id} · Get an Access group */
  async accessGroupsGetAnAccessGroup(params = {}) {
    let path = '/accounts/{account_id}/access/groups/{group_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/groups/{group_id} · Update an Access group */
  async accessGroupsUpdateAnAccessGroup(params = {}) {
    let path = '/accounts/{account_id}/access/groups/{group_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id}/access/groups/{group_id} · Delete an Access group */
  async accessGroupsDeleteAnAccessGroup(params = {}) {
    let path = '/accounts/{account_id}/access/groups/{group_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/identity_providers · List Access identity providers */
  async accessIdentityProvidersListAccessIdentityProviders(params = {}) {
    let path = '/accounts/{account_id}/access/identity_providers'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/identity_providers · Add an Access identity provider */
  async accessIdentityProvidersAddAnAccessIdentityProvider(params = {}) {
    let path = '/accounts/{account_id}/access/identity_providers'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/identity_providers/{identity_provider_id} · Get an Access identity provider */
  async accessIdentityProvidersGetAnAccessIdentityProvider(params = {}) {
    let path = '/accounts/{account_id}/access/identity_providers/{identity_provider_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/identity_providers/{identity_provider_id} · Update an Access identity provider */
  async accessIdentityProvidersUpdateAnAccessIdentityProvider(params = {}) {
    let path = '/accounts/{account_id}/access/identity_providers/{identity_provider_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id}/access/identity_providers/{identity_provider_id} · Delete an Access identity provider */
  async accessIdentityProvidersDeleteAnAccessIdentityProvider(params = {}) {
    let path = '/accounts/{account_id}/access/identity_providers/{identity_provider_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/identity_providers/{identity_provider_id}/saml_certificate · Create SAML encryption certificate for Identity Provider */
  async accessIdentityProvidersCreateSamlCertificateForIdentityProvider(params = {}) {
    let path = '/accounts/{account_id}/access/identity_providers/{identity_provider_id}/saml_certificate'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/groups · List SCIM Group resources */
  async accessIdentityProvidersListScimGroupResources(params = {}) {
    let path = '/accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/groups'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/users · List SCIM User resources */
  async accessIdentityProvidersListScimUserResources(params = {}) {
    let path = '/accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/users'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/idp_federation_grants · List IdP federation grants */
  async accessIdpFederationGrantsList(params = {}) {
    let path = '/accounts/{account_id}/access/idp_federation_grants'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/idp_federation_grants · Create an IdP federation grant */
  async accessIdpFederationGrantsCreate(params = {}) {
    let path = '/accounts/{account_id}/access/idp_federation_grants'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/idp_federation_grants/{grant_id} · Get an IdP federation grant */
  async accessIdpFederationGrantsGet(params = {}) {
    let path = '/accounts/{account_id}/access/idp_federation_grants/{grant_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** DELETE /accounts/{account_id}/access/idp_federation_grants/{grant_id} · Delete an IdP federation grant */
  async accessIdpFederationGrantsDelete(params = {}) {
    let path = '/accounts/{account_id}/access/idp_federation_grants/{grant_id}'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'DELETE', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/keys · Get the Access key configuration */
  async accessKeyConfigurationGetTheAccessKeyConfiguration(params = {}) {
    let path = '/accounts/{account_id}/access/keys'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/keys · Update the Access key configuration */
  async accessKeyConfigurationUpdateTheAccessKeyConfiguration(params = {}) {
    let path = '/accounts/{account_id}/access/keys'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/keys/rotate · Rotate Access keys */
  async accessKeyConfigurationRotateAccessKeys(params = {}) {
    let path = '/accounts/{account_id}/access/keys/rotate'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/logs/access_requests · Get Access authentication logs */
  async accessAuthenticationLogsGetAccessAuthenticationLogs(params = {}) {
    let path = '/accounts/{account_id}/access/logs/access_requests'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/logs/scim/updates · List Access SCIM update logs */
  async accessScimUpdateLogsListAccessScimUpdateLogs(params = {}) {
    let path = '/accounts/{account_id}/access/logs/scim/updates'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/organizations · Get your Zero Trust organization */
  async zeroTrustOrganizationGetYourZeroTrustOrganization(params = {}) {
    let path = '/accounts/{account_id}/access/organizations'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/organizations · Create your Zero Trust organization */
  async zeroTrustOrganizationCreateYourZeroTrustOrganization(params = {}) {
    let path = '/accounts/{account_id}/access/organizations'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/organizations · Update your Zero Trust organization */
  async zeroTrustOrganizationUpdateYourZeroTrustOrganization(params = {}) {
    let path = '/accounts/{account_id}/access/organizations'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** GET /accounts/{account_id}/access/organizations/doh · Get your Zero Trust organization DoH settings */
  async zeroTrustOrganizationGetYourZeroTrustOrganizationDohSettings(params = {}) {
    let path = '/accounts/{account_id}/access/organizations/doh'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'GET', headers: { ...this.headers } };
    for (const [k, v] of Object.entries(params.query || {})) url.searchParams.set(k, v);
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** PUT /accounts/{account_id}/access/organizations/doh · Update your Zero Trust organization DoH settings */
  async zeroTrustOrganizationUpdateYourZeroTrustOrganizationDohSettings(params = {}) {
    let path = '/accounts/{account_id}/access/organizations/doh'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'PUT', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }

  /** POST /accounts/{account_id}/access/organizations/revoke_user · Revoke all Access tokens for a user */
  async zeroTrustOrganizationRevokeAllAccessTokensForAUser(params = {}) {
    let path = '/accounts/{account_id}/access/organizations/revoke_user'.replace(/\{(\w+)\}/g, (_, k) => params[k] || '');
    const url = new URL(path, this.baseURL);
    const opts = { method: 'POST', headers: { ...this.headers } };
    if (params.body) { opts.body = JSON.stringify(params.body); opts.headers['Content-Type'] = 'application/json'; }
    const res = await fetch(url, opts);
    if (!res.ok) throw new Error('cloudflare-workers ' + res.status + ': ' + await res.text());
    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
  }
}

export default CloudflareWorkers;
