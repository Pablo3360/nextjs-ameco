import Nav from "@/components/Nav/nav.js"
import Header from "@/components/header/header"
import { AuthProvider } from "@/app/Provider/authProvider"
export default function DashboardLayout({
    children,
  }) {
    return (
      <section>
            <AuthProvider>
            <Header/>
            <div className="dashboard-layout">
                <Nav/>
                  {children}
            </div>
            </AuthProvider>
      </section>
    )
  }