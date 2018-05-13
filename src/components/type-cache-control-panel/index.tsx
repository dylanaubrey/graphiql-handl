import * as React from "react";
import TypeCacheControlList from "~/components/type-cache-control-list";
import { TypeCacheControlPanelPage, TypeCacheControlPanelSection } from "~/components/type-cache-control-panel/styled";
import TypeSearch from "~/components/type-search";

export default function TypeCacheControlPanel() {
  return (
    <TypeCacheControlPanelPage>
      <TypeSearch />
      <TypeCacheControlPanelSection>
        <h3>Added</h3>
        <TypeCacheControlList listType="added" />
      </TypeCacheControlPanelSection>
      <TypeCacheControlPanelSection>
        <TypeCacheControlList listType="empty" />
      </TypeCacheControlPanelSection>
    </TypeCacheControlPanelPage>
  );
}
