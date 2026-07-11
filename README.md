# @ai-native-solutions/cloudflare-workers-sdk

Sovereign wrapper for **Cloudflare Workers** · Serverless

**100 endpoints** wrapped from OpenAPI spec.

## Install
```bash
npm install @ai-native-solutions/cloudflare-workers-sdk
```

## Use
```js
import CloudflareWorkers from '@ai-native-solutions/cloudflare-workers-sdk';
const client = new CloudflareWorkers({ apiKey: process.env.CLOUDFLARE_WORKERS_KEY });
```

## Endpoints (100)
- `GET /accounts` · List Accounts
- `POST /accounts` · Create an account
- `POST /accounts/move` · Batch move accounts
- `GET /accounts/{account_identifier}/custom_pages` · List custom pages
- `GET /accounts/{account_identifier}/custom_pages/assets` · List custom assets
- `POST /accounts/{account_identifier}/custom_pages/assets` · Create a custom asset
- `GET /accounts/{account_identifier}/custom_pages/assets/{asset_name}` · Get a custom asset
- `PUT /accounts/{account_identifier}/custom_pages/assets/{asset_name}` · Update a custom asset
- `DELETE /accounts/{account_identifier}/custom_pages/assets/{asset_name}` · Delete a custom asset
- `POST /accounts/{account_identifier}/custom_pages/preview_tokens` · Create a preview token
- `GET /accounts/{account_identifier}/custom_pages/{identifier}` · Get a custom page
- `PUT /accounts/{account_identifier}/custom_pages/{identifier}` · Update a custom page
- `GET /accounts/{account_id}` · Account Details
- `PUT /accounts/{account_id}` · Update Account
- `DELETE /accounts/{account_id}` · Delete a specific account
- `GET /accounts/{account_id}/abuse-reports` · List abuse reports
- `GET /accounts/{account_id}/abuse-reports/{report_id}/emails` · List abuse report emails
- `GET /accounts/{account_id}/abuse-reports/{report_id}/mitigations` · List abuse report mitigations
- `POST /accounts/{account_id}/abuse-reports/{report_id}/mitigations/appeal` · Request review on mitigations
- `GET /accounts/{account_id}/abuse-reports/{report_param}` · Abuse Report Details
_...and 80 more_

## License
MIT · Copyright 2026 AI-Native Solutions

## Upstream
- Docs: https://developers.cloudflare.com/workers/
- Homepage: https://workers.cloudflare.com
