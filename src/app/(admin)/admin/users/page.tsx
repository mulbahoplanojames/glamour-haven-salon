import UsersTable from "@/components/admin/users-table";

export default function UsersPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Users
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage user accounts
        </p>
      </div>

      <UsersTable />
    </div>
  );
}
