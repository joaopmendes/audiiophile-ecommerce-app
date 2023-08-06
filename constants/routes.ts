type ImageProp = {
    width: number;
    height: number;
    src: string;
};
export type Route = {
    name: string;
    image: ImageProp;
    path: string;
};

export default [
    {
        name: 'Headphones',
        image: {
            src: '/shared/desktop/image-category-thumbnail-headphones.png',
            width: 144,
            height: 0,
        },
        path: '/headphones',
    },
    {
        name: 'Speakers',
        image: {
            src: '/shared/desktop/image-category-thumbnail-speakers.png',
            width: 144,
            height: 0,
        },
        path: '/speakers',
    },
    {
        name: 'Earphones',
        image: {
            src: '/shared/desktop/image-category-thumbnail-earphones.png',
            width: 147,
            height: 0,
        },
        path: '/earphones',
    },
] as Route[];
