import ReviewsTable from "@/components/reviews-table";

export default function ReviewsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Reviews
        </h1>
        <p className="text-gray-600 mt-1 dark:stext-gray-400">
          Manage product and service reviews
        </p>
      </div>

      <ReviewsTable />
    </div>
  );
}
