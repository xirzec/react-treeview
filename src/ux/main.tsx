import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addChild, removeNode, updateNode } from "../data/actions";
import { ROOT_ID } from "../data/constants";
import { IAppState, INodeMap } from "../data/interfaces";
import TreeLevel from "./treeLevel";

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
        const root = this.props.nodes.get(ROOT_ID);
        return (
            <div>
                <p>Click nodes to expand/collapse them.</p>
                <p>Alt-Click to update a node.</p>
                <p>Shift-Click to add a child.</p>
                <p>Ctrl-Click to remove a node.</p>
                <TreeLevel map={this.props.nodes} items={[root]} onItemClick={this.onNodeClick} />
            </div>
        );
    }

    private onNodeClick = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
        if (event.ctrlKey) {
            this.props.onRemoveNode(id);
        } else if (event.shiftKey) {
            this.props.onAddChild(id);
        } else if (event.altKey) {
            this.props.onUpdateNode(id);
        }
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