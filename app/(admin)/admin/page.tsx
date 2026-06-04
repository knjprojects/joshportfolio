import AdminGuard from "@/components/AdminGuard"

export default function AdminPage() {
    return (
        <AdminGuard>
        <div className="min-h-screen bg-black text-white p-10">
            <h1 className="text-4xl font-bold">
            Admin Dashboard
            </h1>

            <p className="mt-4">
            Upload your projects here.
            </p>
        </div>
        </AdminGuard>
    )
}