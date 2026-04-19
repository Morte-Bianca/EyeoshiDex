"use client";

import { Dashboard, ReferralProvider } from "@orderly.network/affiliate";

export default function AffiliatePage() {
  return (
    <ReferralProvider
      becomeAnAffiliateUrl="/affiliate"
      learnAffiliateUrl="https://eyeoshi.com"
      referralLinkUrl={typeof window !== "undefined" ? window.location.origin : ""}
      overwrite={{
        shortBrokerName: "Eyeoshi",
        brokerName: "Eyeoshi",
      }}
    >
      <Dashboard.DashboardPage />
    </ReferralProvider>
  );
}
