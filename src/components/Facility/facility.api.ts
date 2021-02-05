import Api from "infrastructure";
import { Facility } from "./facility.types";

export const facilityApi = new Api<Facility>("FACILITY");
