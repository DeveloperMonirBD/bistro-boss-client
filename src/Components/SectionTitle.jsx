
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 lg:w-3/12 mx-auto text-center my-12">
            <p className="text-yellow-600"> --- {subHeading} ---</p>
            <h3 className="text-4xl uppercase border-y-2 border-gray-400 py-3 mt-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;