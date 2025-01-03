import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


const Card = ({ item }) => {
    
    const { name, image, price, recipe,_id } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    
    const handleAddToCart = () => {
        if (user && user.email) {
            // send cart item to the database
            

            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            
            axiosSecure.post('/carts', cartItem).then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    //refetch cart to update the cart items count
                    refetch()
                }
            });

        } else {
            Swal.fire({
                title: 'You are not logged In',
                text: "Please login to add to the cart.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, login!'
            }).then(result => {
                if (result.isConfirmed) {
                    // send the user to the login page
                    navigate('/login', {state: {from: location}})
                }
            });
        }
    }

    return (
        <div className="card card-compact bg-base-100 rounded-none shadow-2xl">
            <figure>
                <img src={image} alt="" />
            </figure>
            <p className="absolute right-8 mt-4 px-4 py-2 bg-slate-900 text-orange-400">${price}</p>
            <div className="flex flex-col items-center space-y-3 p-8">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 mt-4 text-orange-400 hover:text-orange-400 hover:border-orange-400 uppercase">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;