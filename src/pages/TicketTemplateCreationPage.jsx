import { useForm } from "react-hook-form"
import Input from "../components/Input"
import ImageInput from "../components/ImageInput"
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
function CreateEventForm() {
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const createEvent=useMutation({
    mutationFn:async (formData)=>{
      const resp=await axios.post('/api/v1/ticketTemplates',formData,{
        withCredentials:true
      });
      return resp.data.data;
    },
    onSuccess:(data)=>{
      console.log(data);
      navigate("/")
    },
    onError:(error)=>{
      console.log(error);
      alert("Failed to create event. Please try again.");
    }
  });
  const onSubmit = (data) => {
    const formData=new FormData();
    formData.append("eventName",data.eventName);
    formData.append("description",data.description);
    formData.append("eventDate",data.eventDate);
    formData.append("venue",data.venue);
    formData.append("price",data.price);
    formData.append("totalSeats",data.totalSeats);
    formData.append("backgroundImage",data.backgroundImage[0]);
    createEvent.mutate(formData);
  };
  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Event Name */}
      <Input
        label="Event Name"
        placeholder="Enter event name"
        {...register("eventName", {
          required: "Event name is required",
        })}
        error={errors.eventName}
      />

      {/* Description */}
      <Input
        label="Description"
        placeholder="Enter event description"
        {...register("description", {
          required: "Description is required",
        })}
        error={errors.description}
      />

      {/* Event Date */}
      <Input
        type="date"
        label="Event Date"
        {...register("eventDate", {
          required: "Event date is required",
        })}
        error={errors.eventDate}
      />

      {/* Venue */}
      <Input
        label="Venue"
        placeholder="Enter venue"
        {...register("venue", {
          required: "Venue is required",
        })}
        error={errors.venue}
      />

      {/* Price */}
      <Input
        type="number"
        label="Price"
        placeholder="Enter ticket price"
        {...register("price", {
          required: "Price is required",
          min: {
            value: 0,
            message: "Price must be positive",
          },
        })}
        error={errors.price}
      />

      {/* Total Seats */}
      <Input
        type="number"
        label="Total Seats"
        placeholder="Enter total seats"
        {...register("totalSeats", {
          required: "Total seats required",
          min: {
            value: 1,
            message: "At least 1 seat required",
          },
        })}
        error={errors.totalSeats}
      />

      {/* Background Image */}
      <ImageInput
        label="Background Image"
        accept="image/*"
        {...register("backgroundImage", {
          required: "Background image is required",
        })}
        error={errors.backgroundImage}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Event
      </button>
    </form>
    {
       createEvent.isPending && <Loader opacity="0.5"/>
    }
    </>
  )
}

export default CreateEventForm