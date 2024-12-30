import Cover from "../../../Shared/Cover";
import MenuItem from "../../../Shared/MenuItem";

const MenuCategory = ({ items, title, img}) => {
    return (
        <div className="py-10">
            {title && (
                <Cover
                    img={img}
                    title={title}
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas tenetur nulla hic ex cumque architecto sed harum!"
                />
            )}

            <div className="grid md:grid-cols-2 gap-10 mb-6 mt-12">
                {items.map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};


export default MenuCategory;