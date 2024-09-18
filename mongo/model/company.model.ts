import { model, models } from 'mongoose';
import companySchema from "../schema/company.schema";

const Company = models.Company || model("Company", companySchema);

export default Company;