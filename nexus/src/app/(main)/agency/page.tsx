import { getAuthUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const agencyId = await verifyAndAcceptInvitation();
  console.log(agencyId);

  //   get the user details
  const user = await getAuthUserDetails();

  if (agencyId) {
    if (user?.role === "SUBACCOUNT_GUEST" || user.role === "SUBACCOUNT_USER") {
      return redirect("/subaccount");
    }
    else if(user?.role === "AGENCY_OWNER" || user?.role === "AGENCY_ADMIN"){
        // if()
    }
  }
  return <div>Agency Dashboard</div>;
};

export default Page;
