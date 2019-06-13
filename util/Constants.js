import packagejson from "~/package.json";

export const analyticsId = packagejson.data.analyticsId;
export const assetsUrl = packagejson.data.assetsEndpoint;
export const apiUrl = packagejson.data.apiEndpoint;
export const projectVersion = packagejson.version;

// ## if need to change, change on nuxt.config.js titleTemplate too
export const basePageHeader = "EpicSevenDB.com - Epic Seven Wiki and Database";
