"use client";

import type { FormEvent } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Trash } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect, useRouter } from "next/navigation";

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

const labelClass =
  "text-[13px] font-medium text-[#222222] dark:text-neutral-200";

const fieldClass =
  "h-10 rounded-md border border-[#E5E5E5] bg-white px-3 text-[13px] text-neutral-900 shadow-none placeholder:text-[#A3A3A3] focus-visible:border-red-500 focus-visible:ring-2 focus-visible:ring-red-500/15 dark:border-neutral-700 dark:bg-[#1a1a1a] dark:text-white dark:placeholder:text-neutral-500 dark:focus-visible:border-red-500";

const AddStudiopage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  console.log(user?.name);
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.currentTarget);
  //   const data = {
  //     ...Object.fromEntries(formData.entries()),
  //     amenities: formData.getAll("amenities"),
  //     username: user?.name,
  //     email: user?.email,
  //     image: user?.image,
  //   };

  //   const res = await fetch("http://localhost:5000/add-studio", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   const result = await res.json();
  //   console.log(result);

  //   console.log("Form data:", data);
  //   console.table(data);
  // };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

   
    const amenities = formData.getAll("amenities");

    
    formData.delete("amenities");
    formData.append("amenities", JSON.stringify(amenities));

    // Add user information
    formData.append("username", user?.name || "");
    formData.append("email", user?.email || "");
    formData.append("image", user?.image || "");

    const { data, error } = await authClient.token();
    const token = data?.token;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-studio`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to add studio");
      }
      const result = await res.json();

      toast.success("Studio added successfully!");
      router.push("/my-listings");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] px-4 py-10 transition-colors duration-300 dark:bg-[#111111] sm:px-7">
      <div className="mx-auto max-w-3xl">
        {/* Page Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-red-600" />

          <h1 className="font-heading text-3xl font-light tracking-tight text-[#171717] dark:text-white sm:text-4xl">
            Add New Studio
          </h1>

          <p className="mt-3 text-sm text-[#737373] dark:text-neutral-400">
            List your creative space and share it with the community.
          </p>
        </div>

        <Card className="gap-0 overflow-hidden rounded-lg border border-[#E5E5E5] bg-white py-0 shadow-sm dark:border-neutral-800 dark:bg-[#1a1a1a]">
          <div className="h-1.5 bg-red-600" />

          <CardContent className="p-5 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Studio Details */}
              <section>
                <h2 className="mb-4 text-base font-semibold text-[#171717] dark:text-white">
                  Studio Details
                </h2>

                <div className="space-y-4">
                  {/* Title */}
                  <div className="space-y-1.5">
                    <Label htmlFor="title" className={labelClass}>
                      Studio Title <span className="text-red-600">*</span>
                    </Label>

                    <Input
                      id="title"
                      name="title"
                      placeholder="e.g., The Creative Loft"
                      className={fieldClass}
                      required
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-1.5">
                    <Label htmlFor="category" className={labelClass}>
                      Category <span className="text-red-600">*</span>
                    </Label>

                    <Select name="category" required>
                      <SelectTrigger
                        id="category"
                        className={`${fieldClass} w-full`}
                      >
                        <SelectValue placeholder="Choose a studio category" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="photo-studio">
                          Photo Studio
                        </SelectItem>
                        <SelectItem value="film-stage">Film Stage</SelectItem>
                        <SelectItem value="podcast-lounge">
                          Podcast Lounge
                        </SelectItem>
                        <SelectItem value="music-suite">Music Suite</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="event-space">Event Space</SelectItem>
                       
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Hourly Rate & Security Deposit */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="hourlyRate" className={labelClass}>
                        Hourly Rate ($) <span className="text-red-600">*</span>
                      </Label>

                      <Input
                        id="hourlyRate"
                        name="hourlyRate"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="e.g., 75"
                        className={fieldClass}
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="securityDeposit" className={labelClass}>
                        Security Deposit ($){" "}
                        <span className="text-red-600">*</span>
                      </Label>

                      <Input
                        id="securityDeposit"
                        name="securityDeposit"
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="e.g., 150"
                        className={fieldClass}
                        required
                      />
                    </div>
                  </div>

                  {/* Maximum Capacity */}
                  <div className="space-y-1.5">
                    <Label htmlFor="maxCapacity" className={labelClass}>
                      Maximum Capacity <span className="text-red-600">*</span>
                    </Label>

                    <Input
                      id="maxCapacity"
                      name="maxCapacity"
                      type="number"
                      min="1"
                      placeholder="e.g., 20 people"
                      className={fieldClass}
                      required
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1.5">
                    <Label htmlFor="location" className={labelClass}>
                      Location / Address <span className="text-red-600">*</span>
                    </Label>

                    <Input
                      id="location"
                      name="location"
                      placeholder="Street, city, and state"
                      className={fieldClass}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="images" className={labelClass}>
                      Studio Images <span className="text-red-600">*</span>
                    </Label>

                    <Input
                      id="images"
                      name="images"
                      type="file"
                      accept="image/*"
                      multiple
                      className={fieldClass}
                      required
                    />
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      You can select multiple images. Maximum 5 images.
                    </p>
                  </div>
                </div>
              </section>

              {/* Amenities */}
              <section className="border-t border-[#EEEEEE] pt-5 dark:border-neutral-800">
                <fieldset>
                  <legend className="text-base font-semibold text-[#171717] dark:text-white">
                    Amenities
                  </legend>

                  <p className="mb-4 mt-1 text-xs text-[#737373] dark:text-neutral-400">
                    Select all amenities available in your studio.
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {amenitiesList.map((amenity) => (
                      <label
                        key={amenity}
                        className="flex cursor-pointer items-center gap-2.5 rounded-md border border-[#EEEEEE] bg-white px-3 py-3 text-xs text-[#404040] transition-colors hover:border-red-300 hover:bg-red-50/50 dark:border-neutral-700 dark:bg-[#222222] dark:text-neutral-300 dark:hover:border-red-800 dark:hover:bg-red-950/30"
                      >
                        <input
                          type="checkbox"
                          name="amenities"
                          value={amenity}
                          className="size-4 shrink-0 cursor-pointer accent-red-600"
                        />

                        <span>{amenity}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </section>

              {/* Detailed Overview */}
              <section className="border-t border-[#EEEEEE] pt-5 dark:border-neutral-800">
                <div className="space-y-1.5">
                  <Label htmlFor="overview" className={labelClass}>
                    Detailed Overview <span className="text-red-600">*</span>
                  </Label>

                  <Textarea
                    id="overview"
                    name="overview"
                    placeholder="Describe your studio, its atmosphere, available equipment, ideal uses, and special features..."
                    className="min-h-28 resize-y rounded-md border border-[#E5E5E5] bg-white px-3 py-3 text-[13px] text-neutral-900 shadow-none placeholder:text-[#A3A3A3] focus-visible:border-red-500 focus-visible:ring-2 focus-visible:ring-red-500/15 dark:border-neutral-700 dark:bg-[#1a1a1a] dark:text-white dark:placeholder:text-neutral-500"
                    required
                  />
                </div>
              </section>

              {/* Read Only */}
              <section className="text-red-400">
                <h2 className="text-base font-semibold text-[#171717] dark:text-white">
                  READ ONLY
                </h2>

                <div className="flex flex-wrap gap-2 font-semibold">
                  <h1>Name: {user?.name}</h1>
                  <h1>Email: {user?.email}</h1>
                </div>
              </section>

              {/* Action Buttons */}
              <div className="flex flex-col-reverse justify-end gap-3 border-t border-[#EEEEEE] pt-5 dark:border-neutral-800 sm:flex-row">
                <Button
                  type="button"
                  variant="outline"
                  onClick={(e) => e.currentTarget.form?.reset()}
                  className="h-10 gap-2 rounded-md border-[#E5E5E5] bg-white px-5 text-[13px] font-medium text-[#525252] hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-neutral-700 dark:bg-[#222222] dark:text-neutral-300 dark:hover:border-red-800 dark:hover:bg-red-950/30 dark:hover:text-red-400"
                >
                  <Trash className="size-4" />
                  Clear Form
                </Button>

                <Button
                  type="submit"
                  className="h-10 gap-2 rounded-md bg-red-600 px-5 text-[13px] font-medium text-white transition-colors hover:bg-red-700"
                >
                  <Plus className="size-4" />
                  Add Studio
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <p className="mt-5 text-center text-xs text-[#A3A3A3]">
          Fields marked with <span className="text-red-600">*</span> are
          required.
        </p>
      </div>
    </main>
  );
};

export default AddStudiopage;
