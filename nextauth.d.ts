import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
    interface Session extends DefaultSession {
      user?: AdapterUser;
    }
  }