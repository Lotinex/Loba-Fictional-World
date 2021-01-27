type ObjectPathPattern = {
    [folder: string]: string[] | ObjectPathPattern;
}
function isStringArray(array: any): array is string[] {
    return Array.isArray(array) && array.every(e => typeof e == 'string');
}
export default class AssetsManager<T extends {
    img: ObjectPathPattern;
    sound: ObjectPathPattern;
}> {
    public img: {[id: string]: HTMLImageElement} = {};
    public sound: {[id: string]: HTMLAudioElement} = {};
    private static loadPublicAsset(type: 'img' | 'sound', path: string): Promise<HTMLImageElement | HTMLAudioElement> {
        return new Promise(rs => {
            const fullPath = require(`public/${type}/${path}`).default;
            switch(type){
                case 'img':
                    const img = new Image();
                    img.src = fullPath;
                    console.log(fullPath)
                    img.onload = () => rs(img);
                    break;
                case 'sound':
                    const sound = new Audio();
                    sound.src = fullPath;
                    sound.onload = () => rs(sound);
                    break;
            }
        })
    }
    constructor(assetPaths: T){
        this.parseTreeAndLoadAsset('img', assetPaths.img)
        this.parseTreeAndLoadAsset('sound', assetPaths.sound)
    }
    private async parseTreeAndLoadAsset(type: 'img' | 'sound', assetPath: ObjectPathPattern): Promise<void> {
        for(const branch in assetPath){
            let current: string[] | ObjectPathPattern =  assetPath[branch];
            while(!isStringArray(current)){
                for(const branch in current) current = (current as ObjectPathPattern)[branch];
            }
            for(const fileName of current){
                switch(type){
                    case 'img':
                        this[type][fileName] = await AssetsManager.loadPublicAsset('img', `${fileName}.png`) as HTMLImageElement;
                        break;
                    case 'sound':
                        this[type][fileName] = await AssetsManager.loadPublicAsset('sound', `${fileName}.mp3`) as HTMLAudioElement;
                        break;
                }
            }
        }
    }
}

