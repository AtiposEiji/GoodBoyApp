export interface ISimpleText {
    elementTypeTitle?: keyof JSX.IntrinsicElements;
    title: string;
    elementTypeDescription?: keyof JSX.IntrinsicElements;
    description: string;
}