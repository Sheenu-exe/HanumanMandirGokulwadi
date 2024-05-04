import Link from "next/link"

export const Sidebar = () => {
    return(
        <div className="drawer sm:hidden absolute z-50">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li>
        <Link href={"/Donations"}>Donations</Link>
      </li>
      <li><Link href={"/Members"}>Members</Link></li>
      
    </ul>
  </div>
</div>
    )
}