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
                <Image {...rest} src={srcSet.desktop} alt={rest.alt || 'Desktop view image'} />
            </div>
            <div className={'hidden tablet:block desktop:hidden'}>
                <Image {...rest} src={srcSet.tablet} alt={rest.alt || 'Tablet view image'} />
            </div>
            <div className={'tablet:hidden'}>
                <Image {...rest} src={srcSet.mobile} alt={rest.alt || 'Mobile view image'} />
            </div>
        </>
    );
};
