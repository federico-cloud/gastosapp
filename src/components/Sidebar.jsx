export const Sidebar = () => {
  return (
    <>
      <div className="flex">
        <aside className="w-64 bg-gray-800 text-white">
          <nav>
            <ul>
              <li><a href="/dashboard/expenses">Expenses</a></li>
              <li><a href="/dashboard/settings">Settings</a></li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  )
}
