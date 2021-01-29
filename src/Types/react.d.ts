declare module '*.png';
declare module '*.mp3';
declare namespace Attrib {
    namespace Prop {
        interface TextTooltip {
            x: number;
            y: number;
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
            type: 'star' | 'planet' | 'other';
        }
        interface Reference {
            icon: string;
            tooltip: TypeUtil.ClassType<import("../Components/Tooltip").Tooltip>;
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
            zoom: boolean;
            x: number;
            y: number;
            w: number;
            h: number;
        }
    }
}