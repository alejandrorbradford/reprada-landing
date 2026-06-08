// Sample call reports for the landing page. No backend — static, realistic
// B2B discovery-call content used by SampleReport / SampleReportSection.
// User-facing strings live in the i18n locale files (sampleReport.*); these
// objects only carry the numbers, types, timestamps and a few inline strings
// that are illustrative report content rather than fixed UI labels.

export const SAMPLE_REPORTS = {
  strong: {
    title: "Northwind Logistics — Discovery",
    score: 87,
    leadInterestPct: 82,
    summary:
      "Rep led a focused discovery, surfaced two quantified pain points, and earned a clear next step. Talk ratio and pacing were balanced; the prospect did most of the talking on impact.",
    talkRatio: { pct: 45, inSweetSpot: true, sweetSpotRange: "40-50%" },
    questionCount: { count: 8, target: "5-10", inTarget: true },
    interruptionRate: { pct: 4, good: true },
    silenceRatio: { pct: 9, inSweetSpot: true, sweetSpotRange: "5-15%" },
    nextSteps: {
      has: true,
      description: "Demo booked for Thu with VP Ops; rep to send ROI one-pager.",
    },
    keyMoments: [
      {
        type: "discovery",
        timestamp: "4:12",
        text: "Uncovered that manual routing costs ~12 hours per week across the team.",
      },
      {
        type: "objection",
        timestamp: "11:38",
        text: "Prospect raised an integration concern; rep addressed it with a clear example.",
      },
      {
        type: "buying-signal",
        timestamp: "19:05",
        text: "\"If this cuts our routing time in half, we'd want it before Q3.\"",
      },
      {
        type: "closing",
        timestamp: "24:40",
        text: "Confirmed decision makers and locked a follow-up demo with the VP of Ops.",
      },
    ],
    improvementTips: [
      "Quantify the cost of the integration concern to pre-empt it in the demo.",
      "Loop in the economic buyer one step earlier in the cycle.",
      "Recap agreed next steps in writing within the hour.",
    ],
  },
  rough: {
    title: "Acme Retail — Discovery",
    score: 54,
    leadInterestPct: 38,
    summary:
      "Rep pitched early and dominated the conversation, asking few discovery questions. Several interruptions and no agreed next step left the deal's status unclear.",
    talkRatio: { pct: 68, inSweetSpot: false, sweetSpotRange: "40-50%" },
    questionCount: { count: 2, target: "5-10", inTarget: false },
    interruptionRate: { pct: 18, good: false },
    silenceRatio: { pct: 3, inSweetSpot: false, sweetSpotRange: "5-15%" },
    nextSteps: {
      has: false,
      description: "Call ended without a confirmed follow-up or owner.",
    },
    keyMoments: [
      {
        type: "risk",
        timestamp: "2:50",
        text: "Launched into a feature pitch before understanding the prospect's goals.",
      },
      {
        type: "objection",
        timestamp: "9:15",
        text: "Prospect questioned pricing; rep talked over the response.",
      },
      {
        type: "question",
        timestamp: "14:02",
        text: "Only two discovery questions asked the entire call.",
      },
      {
        type: "risk",
        timestamp: "21:30",
        text: "Call wrapped with no agreed next step or owner.",
      },
    ],
    improvementTips: [
      "Ask at least five discovery questions before presenting any solution.",
      "Let the prospect finish — pause before responding to objections.",
      "Always confirm a concrete next step and owner before ending the call.",
    ],
  },
};

export default SAMPLE_REPORTS;
