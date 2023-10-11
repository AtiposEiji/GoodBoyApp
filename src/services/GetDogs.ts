import { IDog } from "../models/IDog";

export const GetDog = async (breed: string, subBreed: string): Promise<IDog> => {
    let response;
    
    if(subBreed) {
        response  = await fetch(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/18`).then(response => response.json());
    } else {
        response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/18`).then(response => response.json());
    }
    
    return response;
}