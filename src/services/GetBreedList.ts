import { IDogBreedList } from "../models/IDogBreedList";

export const GetBreeds = async (): Promise<IDogBreedList> => {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`).then(response => response.json());
    return response;
}