export const SidebarLink = ({ text, href, isActive, onClick }) => {
  return (
    <li>
      <a
        className={`inline-block w-full py-4 text-center transition duration-400 ${
          isActive ? "bg-gray-700 border-r-4" : "hover:bg-gray-700"
        }`}
        href={href}
        onClick={onClick}
      >
        {text}
      </a>
    </li>
  );
};
