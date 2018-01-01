import { combineReducers } from "redux";
import { IAction } from "./actions";
import { EMPTY_CHILD_LIST, INITIAL_TREE_STATE, ROOT_ID } from "./constants";
import { IAppState, INode, INodeMap } from "./interfaces";

let nodeIdCounter = 0;

function nextNodeId(): string {
    nodeIdCounter++;
    return String(nodeIdCounter);
}

export function node(state = INITIAL_TREE_STATE, action: IAction): INodeMap {
    switch (action.type) {
        case "UPDATE_NODE": {
            const current = state.get(action.id);
            const updatedNode = { ... current };
            updatedNode.updateCount++;
            return state.set(updatedNode.id, Object.freeze(updatedNode));
        }
        case "ADD_CHILD": {
            const parent = state.get(action.id);
            const newNode: INode = {
                id: nextNodeId(),
                children: EMPTY_CHILD_LIST,
                updateCount: 0,
                parent: parent.id,
            };
            const updatedParent = { ... parent };
            updatedParent.children = parent.children.add(newNode.id);
            const newState = state.set(updatedParent.id, Object.freeze(updatedParent));
            return newState.set(newNode.id, Object.freeze(newNode));
        }
        case "REMOVE_NODE": {
            if (action.id === ROOT_ID) {
                return state;
            }
            const current = state.get(action.id);
            const parent = state.get(current.parent);
            const updatedNode = { ... parent };
            updatedNode.children = parent.children.delete(current.id);
            return state.set(updatedNode.id, Object.freeze(updatedNode));
        }
        default:
            return state;
    }
}

export default combineReducers<IAppState>({
    node,
});