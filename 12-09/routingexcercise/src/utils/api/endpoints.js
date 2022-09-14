export const ENDPOINT = {
  BASE: "https://www.themealdb.com/api/json/v1/1",
  get SEARCH() {
    return `${this.BASE}/search.php`;
  },
  get CATEGORY() {
    return `${this.BASE}/categories.php`;
  },
  get FILTER() {
    return `${this.BASE}/filter.php`;
  },
  get LOOKUP() {
    return `${this.BASE}/lookup.php`;
  },
};
