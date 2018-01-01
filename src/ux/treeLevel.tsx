import * as React from "react";
import { INode, INodeMap } from "../data/interfaces";
import TreeItem from "./treeItem";

export interface ITreeLevelProps {
    map: INodeMap;
    items: INode[];
    onItemClick: (evt: React.MouseEvent<HTMLDivElement>, id: string) => void;
}

export default class TreeLevel extends React.PureComponent<ITreeLevelProps> {
    public render() {
        return <div>{this.getItems()}</div>;
    }

    private getItems(): JSX.Element[] {
        return this.props.items.map(item => {
            return <TreeItem key={item.id} item={item} map={this.props.map} onItemClick={this.props.onItemClick} />;
        });
    }
}