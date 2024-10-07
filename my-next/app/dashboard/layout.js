export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="bg-blue-500 p-4">
        <ul className="flex-space-x-4">
            <li>
                <Link href="dashboard" className="text-white-hover:text-blue-200">
                    Dashboard
                </Link>
            </li>
            <li>
                <Link href="dashboard/setting" className="text-white hover:text-blue-200">
                setting
                </Link>
            </li>
        </ul>

      </nav>
 
      {children}
    </section>
  )
}