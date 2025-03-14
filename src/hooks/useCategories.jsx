import { active } from "d3";
import { useMemo, useState } from "react";

export const useCategories = (expensesByMonth) => {
  const [activeCategories, setActiveCategories] = useState([]);

  const uniqueCategories = useMemo(
    () => [
      "Todos",
      ...new Set(expensesByMonth.map((expense) => expense.category)),
    ],
    [expensesByMonth]
  );

  const handleActiveCategory = (category) => {
    if (activeCategories.length  === uniqueCategories.length - 2 || category.toLowerCase() === "todos") {
      console.log("estoy aca");
      setActiveCategories([]);
      return;
    }

    setActiveCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  console.log(activeCategories);

  return {
    activeCategories,
    uniqueCategories,
    handleActiveCategory,
  };
};
