"use client";

import { ReferralProvider, Dashboard } from "@orderly.network/affiliate";

export default function AffiliatePage() {
  return (
    <ReferralProvider
      becomeAnAffiliateUrl="https://orderly.network"
      learnAffiliateUrl="https://eyeoshi.com"
      referralLinkUrl="https://dex.eyeoshi.com"
      overwrite={{
        shortBrokerName: "Eyeoshi",
        brokerName: "Eyeoshi",
      }}
    >
      <Dashboard.DashboardPage />
    </ReferralProvider>
  );
}
