import { ObjectMap } from "~/types";

export interface TypeCacheControlListProps {
  listType: "added" | "empty";
  typesAdded: ObjectMap;
  typesEmpty: ObjectMap;
}

export interface TypeCacheControlListStateToProps {
  typesAdded: ObjectMap;
  typesEmpty: ObjectMap;
}
