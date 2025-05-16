import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Rating } from "react-simple-star-rating";
import { AuthContext } from "../Provider/AuthProvider";

const AddMovie = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRating = (rate) => setRating(rate);

  const onSubmit = async (data) => {
    // Add rating and email to form data
    if (rating === 0) {
      Swal.fire("Error", "Please select a rating", "error");
      return;
    }

    const newMovie = {
      ...data,
      duration: parseInt(data.duration, 10),
      rating,
      email: user?.email,
    };

    try {
      const res = await fetch(
        "https://assignment-10-server-ebon-zeta.vercel.app/move",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newMovie),
        }
      );

      const result = await res.json();
      if (result.insertedId) {
        Swal.fire("Success!", "Movie added successfully", "success");
        reset();
        setRating(0);
      } else {
        Swal.fire("Error", "Failed to add movie. Try again later.", "error");
      }
    } catch (err) {
      Swal.fire("Error", "An unexpected error occurred.", "error");
    }
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Add Movie!</h1>
        <p className="py-6">
          Provide details of your favorite movies to add them to the collection.
        </p>
      </div>
      <div className="card bg-base-100 w-full shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Movie Poster URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photo", {
                required: "Photo URL is required",
                pattern: {
                  value: /^https?:\/\/.+\..+/,
                  message: "Photo URL must be a valid link",
                },
              })}
            />
            {errors.photo && (
              <span className="text-red-500">{errors.photo.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Movie Title</span>
            </label>
            <input
              type="text"
              placeholder="Movie Title"
              className="input input-bordered"
              {...register("name", {
                required: "Movie title is required",
                minLength: {
                  value: 2,
                  message: "Movie title must have at least 2 characters",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <select
              className="select select-bordered"
              {...register("genre", { required: "Genre is required" })}
            >
              <option value="">Select Genre</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="action">Action</option>
              <option value="romance">Romance</option>
            </select>
            {errors.genre && (
              <span className="text-red-500">{errors.genre.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Duration (minutes)</span>
            </label>
            <input
              type="number"
              placeholder="Duration"
              className="input input-bordered"
              {...register("duration", {
                required: "Duration is required",
                min: {
                  value: 61,
                  message: "Duration must be greater than 60 minutes",
                },
              })}
            />
            {errors.duration && (
              <span className="text-red-500">{errors.duration.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Release Year</span>
            </label>
            <select
              className="select select-bordered"
              {...register("release", { required: "Release year is required" })}
            >
              <option value="">Select Year</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
            {errors.release && (
              <span className="text-red-500">{errors.release.message}</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={30}
              allowHalfIcon
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Summary</span>
            </label>
            <textarea
              placeholder="Summary"
              className="textarea textarea-bordered"
              {...register("summary", {
                required: "Summary is required",
                minLength: {
                  value: 10,
                  message: "Summary must be at least 10 characters long",
                },
              })}
            ></textarea>
            {errors.summary && (
              <span className="text-red-500">{errors.summary.message}</span>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-indigo-900/70 via-purple-800/60 to-pink-700/70">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
