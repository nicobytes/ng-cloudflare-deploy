build:
	ng build
	cd projects/ng-cloudflare-deploy && npm run build
	cd dist/ng-cloudflare-deploy && npm publish
