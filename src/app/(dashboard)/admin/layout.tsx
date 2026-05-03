import AdminDashboardHeader from "@/components/layouts/AdminDashboardHeader";
import AdminSidebar from "@/components/layouts/AdminSidebar";

const AdminDashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="w-full flex">
            <div className="w-60 border-r border-gray-200 h-screen">
                <AdminSidebar />
            </div>
            <section className="w-full flex flex-col gap-2">
                <AdminDashboardHeader />
                {children}
            </section>
        </main>
    )
}

export default AdminDashboardLayout