declare module '*.png';
declare module '*.mp3';
declare namespace Attrib {
    namespace Prop {
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
            name: string;

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
    }
    namespace State {
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
    }
}