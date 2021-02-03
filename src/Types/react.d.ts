declare module '*.png';
declare module '*.mp3';
declare namespace Attrib {
    namespace Prop {
        interface SpaceBackground {
            distance: number;
        }
        interface Stage {
            img: string;
            name: Loba.AreaNames;
            index: number;
            changeSelectedStage: (stage: Loba.AreaNames) => void;
        }
        interface Dialog {
            title: string;
            width: number;
            height: number;
        }
        interface PureButton {
            className: string;
            icon: string;
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
        }
        interface DialogRenderer {
            dialogs: JSX.Element[];
        }
        interface Stages {
            currentSelection: Loba.AreaNames;
        }
        interface Stage {
            selected: boolean;
            index: number;
        }
    }
}