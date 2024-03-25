export class CoreUtils {
	public static isEmptyString(value: string): boolean {
		if (!value) {
			return true;
		}

		return !(value.trim().length > 0);
	}
}
