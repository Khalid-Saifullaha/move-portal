import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMovee = () => {
  const move = useLoaderData();
  const { _id, photo, name, genre, duration, release, rating, summary } = move;

  const handleUpdateMovie = (e) => {
    e.preventDefault();

    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const genre = e.target.genre.value;
    const duration = parseInt(e.target.duration.value, 10);
    const release = e.target.release.value;
    const summary = e.target.summary.value;
    const userEmail = "user@example.com"; // Replace with dynamically fetched email
    console.log();
    // Validations
    if (!/^https?:\/\/.+\..+/.test(photo)) {
      Swal.fire("Error", "Photo URL must be a valid link", "error");
      return;
    }
    if (name.trim().length < 2) {
      Swal.fire(
        "Error",
        "Movie title must have at least 2 characters",
        "error"
      );
      return;
    }
    if (!genre) {
      Swal.fire("Error", "Please select a genre", "error");
      return;
    }
    if (isNaN(duration) || duration <= 60) {
      Swal.fire("Error", "Duration must be greater than 60 minutes", "error");
      return;
    }
    if (!release) {
      Swal.fire("Error", "Please select a release year", "error");
      return;
    }

    if (summary.trim().length < 10) {
      Swal.fire(
        "Error",
        "Summary must be at least 10 characters long",
        "error"
      );
      return;
    }
    const updatedMovie = {
      photo,
      name,
      genre,
      duration,
      release,
      rating,
      summary,
      email: userEmail,
    };

    console.log(updatedMovie);

    // Send data to the server and database
    fetch(`http://localhost:4000/move/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Movie Update successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };
  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold">Update Movie!</h1>
        <p className="py-6">
          Provide details of your favorite movies to add them to the collection.
        </p>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleUpdateMovie} className="card-body">
          {/* Form first row */}
          <div className="flex flex-col gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Movie Poster URL</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Movie Title</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Movie Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Genre</span>
              </label>

              <select
                name="genre"
                defaultValue={genre}
                className="select select-bordered"
                required
              >
                <option value="">Select Genre</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="action">Action</option>
                <option value="romance">Romance</option>
              </select>
            </div>
          </div>
          {/* Form second row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Duration (minutes)</span>
              </label>
              <input
                type="number"
                name="duration"
                defaultValue={duration}
                placeholder="Duration"
                className="input input-bordered"
                min="61"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Release Year</span>
              </label>
              <select
                name="release"
                defaultValue={release}
                className="select select-bordered"
                required
              >
                <option value="">Select Year</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>
          </div>
          {/* Form third row */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Summary</span>
              </label>
              <textarea
                name="summary"
                defaultValue={summary}
                placeholder="Summary"
                className="textarea textarea-bordered"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Updated Movie</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovee;
