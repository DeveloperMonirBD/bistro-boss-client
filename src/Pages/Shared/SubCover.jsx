import { Parallax } from 'react-parallax';

const SubCover = ({ img, title, content }) => {
    return (
        <Parallax blur={{ min: -15, max: 15 }} bgImage={img} bgImageAlt="the dog" strength={-200}>
            <div className="hero h-[500px]">
                <div className="hero-overlay bg-opacity-60 max-w-4xl h-[250px]"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{content}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default SubCover;
