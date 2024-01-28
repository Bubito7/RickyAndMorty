export class Character{
    [x: string]: any;
        constructor(
        public id: number,
        public name: string,
        public status: string,
        public species: string,
        public type: string,
        public gender: string,
        public image: string,
        public origin: Location,
        public location: Location,
        ){}
    
    
    }