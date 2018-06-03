import * as React from "react";
import { RequestAnalysisSectionProps, RequestAnalysisSectionsMap } from "~/components/request-analysis-section/types";
import RetrievedFromCacheSection from "~/components/retrieved-from-cache-section";
import { RETRIEVED_FROM_CACHE } from "~/constants/request-analysis-sections";

const sections: RequestAnalysisSectionsMap = {
  [RETRIEVED_FROM_CACHE]: RetrievedFromCacheSection,
};

export default function RequestAnalysisSection(props: RequestAnalysisSectionProps): JSX.Element {
  const Section = sections[props.activeSection];
  return <Section />;
}
