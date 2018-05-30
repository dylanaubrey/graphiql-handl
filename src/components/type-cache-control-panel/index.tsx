import * as React from "react";
import { PanelMain, PanelSection } from "~/components/styled";
import TypeCacheControlList from "~/components/type-cache-control-list";
import TypeSearch from "~/components/type-search";

export default function TypeCacheControlPanel(): JSX.Element {
  return (
    <PanelMain>
      <TypeSearch />
      <PanelSection>
        <h3>Added</h3>
        <TypeCacheControlList listType="added" />
      </PanelSection>
      <PanelSection>
        <TypeCacheControlList listType="empty" />
      </PanelSection>
    </PanelMain>
  );
}
