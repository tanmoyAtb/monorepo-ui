export const SET_TAGS = "@@engaze/tags/set_all";

interface ISetTagsAction {
  type: typeof SET_TAGS;
  payload: any;
}

export function addTag(tag: string) {
  return { type: SET_TAGS, payload: tag };
}

export type TagActionTypes = ISetTagsAction;
