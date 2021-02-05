declare module '*.png';
declare module '*.jpg';
declare module '*.mp3';
declare namespace Attrib {
    namespace Prop {
        interface ItemTag {
            color: string;
        }
        interface InventoryItem {
            img: string;
            name: string;
            desc: string;
            tags: JSX.Element[];
            //stats: JSX.Element[];
        }
        interface SpaceBackground {
            distance: number;
        }
        interface DialogOKButton {
            closeDialog: () => void;
        }
        interface Stage {
            img: string;
            name: Loba.AreaNames;
            index: number;
            changeSelectedStage: (stage: Loba.AreaNames, reqLv: number) => void;
            reqLv: number;
        }
        interface Dialog {
            title: string;
            width: number;
            height: number;
            hasOK?: boolean;
            onOK?: () => void;
        }
        interface PureButton {
            className: string;
            icon: string;
            onClick?: (e: React.MouseEvent) => void;
        }
        interface AreaProperty {
            property: string;
            value: string;
        }
        interface AreaAssociatedChar {
            img: string;
            id: string;
        }
        interface TextTooltip {
            x: number;
            y: number;
            data: string;
        }
        interface CharacterTooltip {
            x: number;
            y: number;
            data: {
                img: string;
                desc: string;
                name: string;
            }
        }
        interface ItemTooltip {
            x: number;
            y: number;
            data: {
                img: string;
                desc: string;
                name: string;
                tags: JSX.Element[];
            }
        }
        interface WorldMapEntity {
            x: number;
            y: number;
            w: number;
            h: number;
            img: string;
            desc: string;
            name: Loba.AreaNames;

            nameX: number;
            nameY: number;
        }
        interface Area {
            img: string;
            name: string;
            description: string;
            additional?: Array<JSX.Element>;
            sub?: boolean;
            type: Loba.AreaTypes;
            associatedChars?: JSX.Element[];
        }
        interface Reference {
            icon: string;
        }
        interface GameTitle {
            startGame: () => void;
        }
    }
    namespace State {
        interface TransitionEffect {
            active: boolean;
        }
        interface Dialog {
            show: boolean;
        }
        interface Menu {
            active: boolean;
        }
        interface TooltipRenderer {
            currentTooltip: TypeUtil.ClassType<import("../Components/Tooltip").Tooltip> | null;
            tooltipX?: number;
            tooltipY?: number;
            tooltipData?: any;
        }
        interface Area {
            showAdditional: boolean;
        }
        interface WorldMapEntity {
            x: number;
            y: number;
            w: number;
            h: number;
        }
        interface Index {
            viewInfoName?: Loba.AreaNames;
        }
        interface SpaceBackground {
            x: number;
            y: number;
        }
        interface Connellow {
            inGame: boolean;
        }
        interface Game {
            lv: number;
            inStage: boolean;
        }
        interface DialogRenderer {
            dialogs: JSX.Element[];
        }
        interface Stages {
            currentSelection: Loba.AreaNames;
            cannotGo: boolean;
        }
        interface Stage {
            selected: boolean;
            index: number;
        }
    }
}