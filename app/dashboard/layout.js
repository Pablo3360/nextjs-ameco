import Nav from "@/components/Nav/nav.js"
import Header from "@/components/header/header"

export default function DashboardLayout({
    children,
  }) {
    return (
      <section>
            <Header/>
            <div className="dashboard-layout">
                <Nav/>
                {children}
            </div>
      </section>
    )
  }