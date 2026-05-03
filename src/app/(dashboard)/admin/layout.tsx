import AdminDashboardHeader from "@/components/layouts/AdminDashboardHeader";
import AdminSidebar from "@/components/layouts/AdminSidebar";

const AdminDashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main>
            <AdminDashboardHeader />
            <section className="w-full flex gap-2">
                <div className="w-60 border-r border-gray-200 h-screen">
                    <AdminSidebar />
                </div>
                {children}
            </section>
        </main>
    )
}

export default AdminDashboardLayout