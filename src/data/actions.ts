export type IAction = IUpdateNodeAction | IAddChildAction | IRemoveNodeAction;

export interface IUpdateNodeAction {
    type: "UPDATE_NODE";
    id: string;
}

export interface IAddChildAction {
    type: "ADD_CHILD";
    id: string;
}

export interface IRemoveNodeAction {
    type: "REMOVE_NODE";
    id: string;
}