import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addChild, removeNode, updateNode } from "../data/actions";
import { IAppState, INodeMap } from "../data/interfaces";

interface IConnectedProps {
    nodes: INodeMap;
}

interface IDispatchProps {
    onAddChild: (id: string) => void;
    onRemoveNode: (id: string) => void;
    onUpdateNode: (id: string) => void;
}

export class Main extends React.PureComponent<IConnectedProps & IDispatchProps> {

    public render(): JSX.Element {
        return <div>Hello World!!</div>;
    }
}

function mapStateToProps(state: IAppState): IConnectedProps {
    return {
        nodes: state.node,
    };
}

function mapDispatchToProps(dispatch: Dispatch<IAppState>): IDispatchProps {
    return {
        onAddChild: id => dispatch(addChild(id)),
        onRemoveNode: id => dispatch(removeNode(id)),
        onUpdateNode: id => dispatch(updateNode(id)),
    };
}

export default connect<IConnectedProps, IDispatchProps, {}>(mapStateToProps, mapDispatchToProps)(Main);