"use client";

import { Pencil } from "lucide-react";
import { Studio } from "@/lib/type";
import { toast } from "react-toastify";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
const amenitiesList = [
  "Professional Lighting",
  "Camera Equipment",
  "Microphones",
  "Soundproofing",
  "Wi-Fi",
  "Air Conditioning",
  "Parking",
  "Changing Room",
  "Natural Lighting",
  "Projector",
];

export default function EditStudioModal({ studio }: { studio: Studio }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      ...Object.fromEntries(formData.entries()),
      amenities: formData.getAll("amenities"),
    };

    try {
      const res = await fetch(`http://localhost:5000/studio/${studio._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error("Failed to update studio");
        return;
      }
      
      toast.success("Studio updated successfully!");
      setOpen(false);
      router.refresh();   
      router.push("/my-listings");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  const inputStyle =
    "h-11 rounded-lg border-gray-200 bg-gray-50 focus-visible:ring-red-500";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" className="gap-2"><Pencil size={16} /> Edit Studio</Button>} />
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-2xl border-0 bg-white p-0 sm:max-w-[550px]">
        {/* Header */}
        <DialogHeader className="border-b border-gray-100 px-6 py-5 text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Pencil size={20} />
            </div>

            <div>
              <DialogTitle className="text-xl font-bold text-gray-900">
                Edit Studio
              </DialogTitle>

              <DialogDescription className="mt-1 text-sm text-gray-500">
                Update your studio details below.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
          {/* Studio Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Studio Name
            </label>
            <Input
              name="title"
              defaultValue={studio.title}
              required
              className={inputStyle}
            />
          </div>

          {/* Category */}
          <div className="space-y-1.5">
            <Label
              htmlFor="category"
              className="text-sm font-semibold text-gray-700"
            >
              Category
            </Label>
            <Select name="category" defaultValue={studio.category} required>
              <SelectTrigger id="category" className={`${inputStyle} w-full`}>
                <SelectValue placeholder="Choose a studio category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="photo-studio">Photo Studio</SelectItem>
                <SelectItem value="film-stage">Film Stage</SelectItem>
                <SelectItem value="podcast-lounge">Podcast Lounge</SelectItem>
                <SelectItem value="music-suite">Music Suite</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="event-space">Event Space</SelectItem>
                <SelectItem value="Dance-studio">Dance Studio</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Rate and Deposit */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                {" "}
                Hourly Rate ($)
              </label>
              <Input
                name="hourlyRate"
                type="number"
                defaultValue={studio.hourlyRate}
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Security Deposit ($)
              </label>
              <Input
                name="securityDeposit"
                type="number"
                defaultValue={studio.securityDeposit}
                required
                className={inputStyle}
              />
            </div>
          </div>

          {/* Capacity and Location */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Maximum Capacity
              </label>
              <Input
                name="maxCapacity"
                type="number"
                defaultValue={studio.maxCapacity}
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Location
              </label>
              <Input
                name="location"
                defaultValue={studio.location}
                required
                className={inputStyle}
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Studio Image URL
            </label>
            <Input
              name="imageUrl"
              type="url"
              defaultValue={studio.imageUrl}
              required
              className={inputStyle}
            />
          </div>

          {/* Amenities */}
          <div className="space-y-1.5">
            <Label className="text-sm font-semibold text-gray-700"> Amenities </Label>
            <div className="grid grid-cols-2 gap-3"> {amenitiesList.map((amenity) => (
                <label key={amenity} className="flex items-center gap-2 text-sm text-gray-600" >
                  <input type="checkbox" name="amenities" value={amenity} 
                  defaultChecked={studio.amenities?.includes(amenity)} className="accent-red-600" />
                  {amenity} </label> ))}
            </div>
          </div>
          {/* Overview */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700"> Studio Overview </label>
            <Textarea name="overview" defaultValue={studio.overview}
              required
              rows={4}
              className="rounded-lg border-gray-200 bg-gray-50 focus-visible:ring-red-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">
            <Button
              type="button"
              variant="outline"
              className="rounded-lg px-5"
             onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="rounded-lg bg-red-600 px-6 text-white hover:bg-red-700"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
