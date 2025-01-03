import Card from '../../Components/Card';

const OrderTab = ({ items }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map(item => (
                <Card key={item._id} item={item} />
            ))}
        </div>
    );
};

export default OrderTab;
