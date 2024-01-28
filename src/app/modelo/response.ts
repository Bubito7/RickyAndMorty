import { Character } from "./character";
import { Information } from "./information";

export class Response{
    constructor(
        public info:Information,
        public results:Character[]
    ){}
}