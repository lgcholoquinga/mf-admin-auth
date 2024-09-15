const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
	name: 'mf-admin-auth',

	exposes: {
		'./routes': './src/app/app.routes.ts',
	},

	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
	},

	skip: ['rxjs/ajax', 'rxjs/fetch', 'rxjs/testing', 'rxjs/webSocket'],
});
