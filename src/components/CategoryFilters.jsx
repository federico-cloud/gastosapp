export const CategoryFilters = ({
  categories,
  activeCategories,
  onCategoryClick,
}) => (
  <ul className="flex-wrap justify-around w-[70%] container-row">
    {categories.map((category) => (
      <li
        key={category}
        onClick={() => onCategoryClick(category)}
        className={`p-4 hover:cursor-pointer ${
          category.toLowerCase() === "todos"
            ? activeCategories.length === 0
              ? "font-bold text-turqo-600"
              : "text-white"
            : activeCategories.includes(category)
            ? "font-bold text-turqo-600"
            : "text-white"
        }`}
      >
        {category}
      </li>
    ))}
  </ul>
);
