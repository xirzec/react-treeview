import * as React from "react";
import { INode, INodeMap } from "../data/interfaces";

export interface ITreeItemProps {
    map: INodeMap;
    item: INode;
    onItemClick: (evt: React.MouseEvent<HTMLDivElement>, id: string) => void;
}

export default class TreeLevel extends React.PureComponent<ITreeItemProps> {
    public render() {
        const item = this.props.item;
        return <div onClick={this.onClick}>&lt;{item.id} clickCount="{item.clickCount}"&gt;</div>;
    }

    private onClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        this.props.onItemClick(evt, this.props.item.id);
    }
}