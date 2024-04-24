// import { writeFileSync, readFileSync } from "fs";

export const wait = (delay = 1000) =>
  new Promise<void>((res) => setTimeout(res, delay));

export const exceptKeys = (object: any, fields: string[]) => {
  return Object.keys(object).reduce((c, key) => {
    if (fields.indexOf(key) > -1) return c;
    return {
      ...c,
      [key]: object[key],
    };
  }, {});
};
export const toJSON = (obj: any) => JSON.stringify(obj, null, 2);

// export const writeJSON = (path: string, data: any) => {
//   if (!data) return;
//   writeFileSync(path, toJSON(data));
// };
//
// export const readJSON = (path: string) => {
//   if (!path) return;
//   return JSON.parse(readFileSync(path, "utf8"));
// };

export const objectToArray = (obj: any) => {
  return Object.keys(obj).reduce((coll: any, key: string) => {
    const value = obj[key];
    return [...coll, value];
  }, []);
};
