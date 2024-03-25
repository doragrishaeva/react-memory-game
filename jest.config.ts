export default {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				tsconfig: 'tsconfig.json',
				diagnostics: {
					ignoreCodes: [1343]
				},
				astTransformers: {
					before: [
						{
							path: 'ts-jest-mock-import-meta',
							options: {
								metaObjectReplacement: {
									url: 'https://www.url.com'
								}
							}
						}
					]
				}
			}
		],
		'^.+\\.svg$': 'jest-transformer-svg'
	},
	rootDir: 'src',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'^.+\\.(css|less|scss)$': 'identity-obj-proxy'
	},
	setupFilesAfterEnv: ['<rootDir>/../jest.setup.js']
};
