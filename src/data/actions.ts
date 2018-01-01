export type IAction = IUpdateNodeAction | IAddChildAction | IRemoveNodeAction;

export interface IUpdateNodeAction {
    type: "UPDATE_NODE";
    id: string;
}

export function updateNode(id: string): IUpdateNodeAction {
    return {
        type: "UPDATE_NODE",
        id,
    };
}

export interface IAddChildAction {
    type: "ADD_CHILD";
    id: string;
}

export function addChild(id: string): IAddChildAction {
    return {
        type: "ADD_CHILD",
        id,
    };
}

export interface IRemoveNodeAction {
    type: "REMOVE_NODE";
    id: string;
}

export function removeNode(id: string): IRemoveNodeAction {
    return {
        type: "REMOVE_NODE",
        id,
    };
}
