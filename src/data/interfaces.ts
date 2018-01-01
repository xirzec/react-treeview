import * as Immutable from "immutable";

export interface INode {
    id: string;
    clickCount: number;
    children: Immutable.OrderedSet<string>;
    parent: string;
}

export type INodeMap = Immutable.Map<string, Readonly<INode>>;

export interface IAppState {
    node: INodeMap;
}