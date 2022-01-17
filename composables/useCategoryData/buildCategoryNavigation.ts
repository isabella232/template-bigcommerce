import {
  CategoryTree,
  SearchResultNavigationItem
} from '@vue-storefront/bigcommerce';

export function buildCategoryNavigation(
  categories: CategoryTree[]
): SearchResultNavigationItem[] {
  if (!categories) {
    return [];
  }

  return categories.map((item) => {
    return { key: item.url, label: item.name, slug: item.url };
  });
}
