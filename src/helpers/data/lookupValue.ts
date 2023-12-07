/**
 * https://stackoverflow.com/a/60214944
 * Lookups value from object with given key
 *
 * @param obj - The object to lookup property with
 * @param key - The key we are attempting to use in the object
 * @returns The value from the object with the given key
 */
export const lookupValue = <T>(obj: object, key: string): T[] => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- is fine working with any
    /* @ts-ignore */
    return key.split(".").reduce((o, k) => o && o[k], obj) as T[];
};
