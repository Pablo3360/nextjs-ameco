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
                <div className="body">
                  {children}
                </div>
            </div>
            </AuthProvider>
      </section>
    )
  }