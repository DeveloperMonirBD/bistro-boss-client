
import { Link } from "react-router-dom";
import MenuItem from "../../../Shared/MenuItem";
import SubCover from "../../../Shared/SubCover";

const MenuCategory = ({ items, title, img}) => {
    return (
        <div className="pb-20">
            {title && <SubCover img={img} title={title} content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quas tenetur nulla hic ex cumque architecto sed harum!" />}

            <div className="grid md:grid-cols-2 gap-10 mb-6 mt-12">
                {items.map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
            <div className="mx-auto flex justify-center">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </Link>
            </div>
        </div>
    );
};


export default MenuCategory;