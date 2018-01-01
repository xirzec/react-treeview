import * as Immutable from "immutable";

export interface INode {
    id: string;
    updateCount: number;
    children: Immutable.OrderedSet<string>;
    parent: string;
}

export type INodeMap = Immutable.Map<string, Readonly<INode>>;

export interface IAppState {
    node: INodeMap;
}