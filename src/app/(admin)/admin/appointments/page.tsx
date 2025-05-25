import AppointmentsTable from "@/components/admin/appointments-table";

export default function AppointmentsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Appointments
        </h1>
        <p className="text-gray-600 mt-1 dark:text-gray-400">
          Manage salon appointments
        </p>
      </div>

      <AppointmentsTable />
    </div>
  );
}
