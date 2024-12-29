
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-14">
            <p className="text-yellow-600"> --- {subHeading} ---</p>
            <h3 className="text-3xl font-bold uppercase border-y-2 border-gray-400 py-4 mt-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;