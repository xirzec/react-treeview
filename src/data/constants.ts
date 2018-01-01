import * as Immutable from "immutable";
import { INode } from "./interfaces";

export const ROOT_ID = "ROOT";

export const EMPTY_CHILD_LIST = Immutable.OrderedSet<string>();

export const INITIAL_ROOT_NODE: INode = Object.freeze<INode>({
    id: ROOT_ID,
    clickCount: 0,
    children: EMPTY_CHILD_LIST,
    parent: "",
});

export const INITIAL_TREE_STATE = Immutable.Map<string, Readonly<INode>>({
    [ROOT_ID]: INITIAL_ROOT_NODE,
});
