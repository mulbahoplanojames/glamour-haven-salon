import ProductClient from "./_components/productClient";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <>
      <ProductClient params={{ id }} />
    </>
  );
};

export default SingleProductPage;
