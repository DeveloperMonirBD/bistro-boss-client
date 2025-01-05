import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageTitle from '../../Components/PageTitle';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../../Components/SocialLogin';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        // createUser(data.email, data.password).then(result => {
        //     const loggedUser = result.user;
        //     console.log(loggedUser);
        //     updateUserProfile(data.name, data.photoURL)
        //         .then(() => {

        //create user entry in the database
        // const userInfo = {
        //     name: data.name,
        //     email: data.email
        // }

        // axiosPublic.post('/users', userInfo)
        //     .then(res => {
        //         if (res.data.insertedId) {
        //             console.log('user added to the database')
        //         reset();
        //         Swal.fire({
        //             position: 'top-end',
        //             icon: 'success',
        //             title: 'USer created successfully',
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //         navigate('/');
        //     }
        // })
        //         })
        //     .catch(error => console.log(error))
        // });

        createUser(data?.email, data?.password).then(result => {
            if (result) {
                updateUserProfile(data?.name, data?.photoURL).then(() => {
                    const updatedUser = {
                        name: data.name,
                        email: data.email,
                        photo: data.photoURL
                    };

                    axiosPublic.post('/users', updatedUser).then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the database');
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'USer created successfully',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    });
                });
            }
        });
        
        console.log(data);
    };

    return (
        <>
            {/* Setup Page-Title by react Helmet */}
            <PageTitle title="Sign Up" />

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-rose-600 mt-1">Name is required</span>}
                            </div>

                            {/* photo url */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-rose-600 mt-1">photo URL is required</span>}
                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-rose-600 mt-1">Email is required</span>}
                            </div>
                            {/* password  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    {...register('password', { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />

                                {errors.password?.type === 'required' && <p className="text-rose-600">Password is required</p>}

                                {errors.password?.type === 'minLength' && <p className="text-rose-600">Password must be 6 characters</p>}

                                {errors.password?.type === 'maxLength' && <p className="text-rose-600">Password must be less than 20 characters</p>}

                                {errors.password?.type === 'pattern' && <p className="text-rose-600">Password must have one Uppercase, one Lowercase, one Number and one special characters</p>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            {/* submit btn  */}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>

                        <div className="divider mt-0 mb-6 mx-8">OR</div>

                        <div className="flex justify-center mb-4">
                            <SocialLogin />
                        </div>

                        <p className="text-center pb-6">
                            <small>
                                Already have an account?
                                <Link to="/login">
                                    <span className="underline text-blue-500"> Login</span>
                                </Link>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
