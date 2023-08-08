import Image, { ImageProps } from 'next/image';

type ImageViewPortProps = {
    srcSet: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
} & ImageProps;
export const ImageViewPort: React.FC<ImageViewPortProps> = ({ srcSet, ...rest }) => {
    return (
        <>
            <div className={'hidden desktop:block'}>
                <Image {...rest} src={srcSet.desktop} />
            </div>
            <div className={'hidden tablet:block desktop:hidden'}>
                <Image {...rest} src={srcSet.tablet} />
            </div>
            <div className={'tablet:hidden'}>
                <Image {...rest} src={srcSet.mobile} />
            </div>
        </>
    );
};
