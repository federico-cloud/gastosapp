export const SidebarLink = ({ text }) => {
  return (
    <li>
      <a
        className="inline-block w-full py-4 bg-amber-100"
        href="/dashboard/expenses"
      >
        {text}
      </a>
    </li>
  );
};
