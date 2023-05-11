import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const {_id, name, chef, supplier, taste, category, details, photo} = coffee;

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const UpdatedCoffee = {name, chef, supplier, taste, category, details, photo};
        console.log(UpdatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  });
            }
        });
        
    }

    return (
        <form onSubmit={handleUpdate} className='w-9/12 mx-auto my-10'>
            <h2 className='text-3xl text-center my-5 font-bold text-purple-700'>Update The Coffee</h2>

            {/* Name and chef row */}

            <div className='flex gap-5'>
                <div className="form-control mb-4 w-1/2">
                    <label className="label">
                        <span className="text-xl font-bold label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={name} placeholder="Coffee Name" name='name' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mb-4 w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Chef</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={chef} placeholder="Enter Coffee Chef" name='chef' className="input input-bordered w-full " />
                    </label>
                </div>
            </div>

            {/* Supplier and Taste row */}

            <div className='flex gap-5'>
                <div className="form-control mb-4 w-1/2">
                    <label className="label">
                        <span className="text-xl font-bold label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={supplier} placeholder="Enter Supplier" name='supplier' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mb-4 w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={taste} placeholder="Enter Coffee Taste" name='taste' className="input input-bordered w-full " />
                    </label>
                </div>
            </div>

            {/* Category and Details row */}

            <div className='flex gap-5'>
                <div className="form-control mb-4 w-1/2">
                    <label className="label">
                        <span className="text-xl font-bold label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={category} placeholder="Enter Category" name='category' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mb-4 w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-bold">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={details} placeholder="Enter Coffee Details" name='details' className="input input-bordered w-full " />
                    </label>
                </div>
            </div>

            {/* Photo URL row */}

            <div className="form-control mb-4 w-full">
                <label className="label">
                    <span className="text-xl font-bold label-text">Photo</span>
                </label>
                <label className="input-group">
                    <input type="text" defaultValue={photo} placeholder="Enter Photo URL" name='photo' className="input input-bordered w-full" />
                </label>
            </div>

            <input type="submit" value="Update Coffee" className="btn btn-block" />

        </form>
    );
};

export default UpdateCoffee;