import { CoreUtils } from '@/utils';

describe('CoreUtils.isEmptyString', () => {
	test('returns true for an empty string', () => {
		expect(CoreUtils.isEmptyString('')).toBe(true);
	});

	test('returns true for a string with only whitespace', () => {
		expect(CoreUtils.isEmptyString('   ')).toBe(true);
	});

	test('returns false for a non-empty string', () => {
		expect(CoreUtils.isEmptyString('hello')).toBe(false);
	});

	test('returns true for null', () => {
		expect(CoreUtils.isEmptyString(null)).toBe(true);
	});

	test('returns true for undefined', () => {
		expect(CoreUtils.isEmptyString(undefined)).toBe(true);
	});
});
