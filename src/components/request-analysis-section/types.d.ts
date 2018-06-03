import RetrievedFromCacheSection from "~/components/retrieved-from-cache-section";
import { RETRIEVED_FROM_CACHE } from "~/constants/request-analysis-sections";
import { RequestAnalysisSections } from "~/types";

export interface RequestAnalysisSectionsMap {
  [RETRIEVED_FROM_CACHE]: typeof RetrievedFromCacheSection;
}

export interface RequestAnalysisSectionProps {
  activeSection: RequestAnalysisSections;
}
