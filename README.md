# LazarusArchive
Development blog for lazarus engine

## Development
Very ad-hoc. There's no local / dummy environment. Everything goes into prod. Probably fix this...

## Deployment
* `server/` project is hosted on https://render.com/ for ~$7mo
* `client/` is hosted on https://vercel.com/ for free
* Database is a mongodb doc client
* Domain name renews yearly, can't remember how or where I got it

### Server
Production deployment is synced with github but must be deployed from the latest commit manually via the render console.
Go there and log in etc then select "deploy from latest commit".

The mongodb database has a network whitelist. The region-specific IP's of the render server _must_ be added in order to make requests.

### Client
The client can be deployed from the vercel cli.
Ensure that you are in the `client` directory before doing so....