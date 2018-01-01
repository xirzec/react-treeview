import * as React from "react";
import { INode, INodeMap } from "../data/interfaces";
import TreeCollapsedIcon from "./icons/treeCollapsed";
import TreeExpandedIcon from "./icons/treeExpanded";
import TreeLevel from "./treeLevel";

export interface ITreeItemProps {
    map: INodeMap;
    item: INode;
    onItemClick: (evt: React.MouseEvent<HTMLDivElement>, id: string) => void;
}

export interface ITreeItemState {
    expanded: boolean;
}

export default class TreeItem extends React.PureComponent<ITreeItemProps, ITreeItemState> {

    constructor(props: ITreeItemProps) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    public render() {
        const item = this.props.item;
        const hasChildren = item.children.size > 0;
        const expanded = this.state.expanded;
        let icon: JSX.Element | undefined;
        let footer: JSX.Element | undefined;
        let child: JSX.Element | undefined;
        if (hasChildren && expanded) {
            icon = <TreeExpandedIcon/>;
            footer = <div>&lt;node&gt;</div>;
            child = (
                <TreeLevel
                    map={this.props.map}
                    items={this.getChildren()}
                    isRoot={false}
                    onItemClick={this.props.onItemClick}
                />
            );
        } else if (hasChildren) {
            icon = <TreeCollapsedIcon/>;
        }
        return (
            <div onClick={this.onClick}>
                <div>
                    {icon}
                    &lt;node
                    id="{item.id}"
                    updateCount="{item.updateCount}"
                    childCount="{item.children.size}"
                    {expanded ? "" : "/"}&gt;
                </div>
                {child}
                {footer}
            </div>
        );
    }

    private onClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        evt.stopPropagation();
        if (!evt.altKey && !evt.shiftKey && !evt.ctrlKey) {
            this.toggleExpand();
        } else {
            this.props.onItemClick(evt, this.props.item.id);
        }
    }

    private toggleExpand() {
        if (this.props.item.children.size > 0) {
            this.setState({
                expanded: !this.state.expanded,
            });
        }
    }

    private getChildren() {
        return this.props.item.children.toArray().map(child => this.props.map.get(child));
    }
}