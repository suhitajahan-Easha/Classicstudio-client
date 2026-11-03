"use client";

import { Pencil } from "lucide-react";
import { Studio } from "@/lib/type";
import { toast } from "react-toastify";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
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
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const amenities = formData.getAll("amenities");

    formData.delete("amenities");
    formData.append("amenities", JSON.stringify(amenities));

    const { data, error } = await authClient.token();
    const token = data?.token;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/studio/${studio._id}`,
        {
          method: "PATCH",
          headers: {
            authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      if (!res.ok) {
        throw new Error("Failed to update studio");
      }

      toast.success("Studio updated successfully!");

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
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) {
          router.push("/my-listings");
        }
      }}
    >
      <DialogContent className="max-h-[90dvh] w-[calc(100%-1.5rem)] max-w-lg overflow-y-auto overflow-x-hidden rounded-2xl border border-gray-200 bg-white p-0 dark:border-neutral-800 dark:bg-[#1a1a1a] sm:w-full sm:max-w-137.5">
        {/* Header */}
        <DialogHeader className="border-b border-gray-100 px-4 py-4 text-left dark:border-neutral-800 sm:px-6 sm:py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400">
              <Pencil size={20} />
            </div>

            <div className="min-w-0">
              <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
                Edit Studio
              </DialogTitle>

              <DialogDescription className="mt-1 wrap-break-word text-sm text-gray-500 dark:text-neutral-400">
                Update your studio details below.
                <br />
                Host: {user?.name}
                <br />
                {user?.email}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 px-4 py-5 sm:px-6 sm:py-6"
        >
          {/* Studio Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-neutral-200">
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
              className="text-sm font-semibold text-gray-700 dark:text-neutral-200"
            >
              Category
            </Label>
            <Select name="category" defaultValue={studio.category} required>
              <SelectTrigger id="category" className={`${inputStyle} w-full`}>
                <SelectValue placeholder="Choose a studio category" />
              </SelectTrigger>
              <SelectContent className="border-neutral-200 bg-white dark:border-neutral-700 dark:bg-[#222222]">
                <SelectItem value="photo-studio">Photo Studio</SelectItem>
                <SelectItem value="film-stage">Film Stage</SelectItem>
                <SelectItem value="podcast-lounge">Podcast Lounge</SelectItem>
                <SelectItem value="music-suite">Music Suite</SelectItem>
                <SelectItem value="workshop">Workshop</SelectItem>
                <SelectItem value="event-space">Event Space</SelectItem>
              
              </SelectContent>
            </Select>
          </div>

          {/* Rate and Deposit */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-neutral-200">
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
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-neutral-200">
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-neutral-200">
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
              <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-neutral-200">
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

          {/* Studio Images */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-neutral-200">
              Studio Images
            </label>

            <div className="mb-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {studio.images?.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  height={200}
                  width={200}
                  alt={`Studio image ${index + 1}`}
                  className="h-20 w-full rounded-lg object-cover"
                />
              ))}
            </div>

            <Input
              name="images"
              type="file"
              accept="image/*"
              multiple
              className={`${inputStyle} w-full min-w-0`}
            />

            <p className="mt-1 text-xs text-gray-500 dark:text-neutral-400">
              Select new images only if you want to replace the existing ones.
            </p>
          </div>

          {/* Amenities */}
          <div className="space-y-1.5">
            <Label className="text-sm font-semibold text-gray-700 dark:text-neutral-200">
              Amenities
            </Label>
            <div className="grid grid-cols-2 gap-3">
              {amenitiesList.map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-300"
                >
                  <input
                    type="checkbox"
                    name="amenities"
                    value={amenity}
                    defaultChecked={studio.amenities?.includes(amenity)}
                    className="accent-red-600"
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-neutral-200">
              Studio Overview
            </label>
            <Textarea
              name="overview"
              defaultValue={studio.overview}
              required
              rows={4}
              className="rounded-lg border-gray-200 bg-gray-50 focus-visible:ring-red-500 dark:border-neutral-700 dark:bg-[#222222] dark:text-white dark:placeholder:text-neutral-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 dark:border-neutral-800 sm:flex-row sm:justify-end">
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-lg border-neutral-300 bg-white px-5 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-[#222222] dark:text-neutral-200 dark:hover:bg-neutral-700 sm:w-auto"
              onClick={() => {
                window.location.href = "/my-listings";
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="w-full rounded-lg bg-red-600 px-6 text-white hover:bg-red-700 sm:w-auto"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
