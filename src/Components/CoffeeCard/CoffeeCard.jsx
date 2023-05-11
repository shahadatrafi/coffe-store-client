import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {

    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }

    return (
        <div className="ps-3 card card-side bg-base-100 shadow-xl bg-slate-200">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex w-full justify-between p-6 ">
                <div>
                    <h2 className="card-title text-purple-800 mb-3" >Name: {name}</h2>
                    <p className='text mb-2'><span className='font-semibold '>Chef: </span> {chef}</p>
                    <p className='text mb-2'><span className='font-semibold '>Supplier: </span> {supplier}</p>
                    <p className='text mb-2'><span className='font-semibold '>Category: </span> {category}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical gap-4">
                        <button className="btn">View</button>
                        <button className="btn"><Link to={`/updateCoffee/${_id}`}>Edit</Link></button>
                        <button className="btn" onClick={() => handleDelete(_id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;