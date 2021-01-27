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
        }
    }
    namespace State {
        interface Menu {
            active: boolean;
        }
        interface TooltipRenderer {
            currentTooltip: TypeUtil.ClassType<import("../Components/Tooltip/Tooltip").Tooltip> | null;
            tooltipX?: number;
            tooltipY?: number;
            tooltipData?: any;
        }
    }
}