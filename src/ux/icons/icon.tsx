import * as React from "react";

export interface IIconProps {
    style?: React.CSSProperties;
    onClick?: (evt: React.MouseEvent<SVGElement>) => void;
    height?: number;
    width?: number;
}

export abstract class Icon extends React.PureComponent<IIconProps> {
    public static defaultProps = {
        height: 14,
        width: 14,
    };

    public render() {
        return (
        <svg
            style={this.props.style}
            fill="currentColor"
            height={this.props.height}
            width={this.props.width}
            viewBox="0 0 448 448"
            onClick={this.handleClick}
            focusable="false"
        >
            {this.getIcon()}
        </svg>
        );
    }

    protected abstract getIcon(): JSX.Element | JSX.Element[];

    private handleClick = (evt: React.MouseEvent<SVGElement>) => {
        if (this.props.onClick) {
            this.props.onClick(evt);
        }
    }
}
