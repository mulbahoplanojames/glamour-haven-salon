import axios from "axios";
import ServicesTableClient from "./services-table-client";
import { ServiceType } from "@/types/types";
import { handleFetchServices } from "@/utils/helper";

export default async function ServicesTable() {
  const services = await handleFetchServices();
  // console.log("Services:", services);
  return <ServicesTableClient server_services={services as ServiceType[]} />;
}
