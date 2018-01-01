import * as React from "react";
import { Icon } from "./icon";

export default class TreeExpandedIcon extends Icon {
    protected getIcon() {
        return <path d="M320 128v192h-192l192-192z"/>;
    }
}
