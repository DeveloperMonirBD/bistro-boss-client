import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems);
            })
    }, [])

    return (
        <section>
            <SectionTitle heading="From Our Menu" subHeading="Popular Items" />
            <div className="grid md:grid-cols-2 gap-10 mb-6">
                {menu.map(item => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
            <div className="flex justify-center mb-10">
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu </button>
            </div>
        </section>
    );
};

export default PopularMenu;