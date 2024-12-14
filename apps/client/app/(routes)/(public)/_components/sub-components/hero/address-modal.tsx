"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Address, AddressInput } from "@/types";
import { addressSchema } from "@/schemas";

type AddressFormData = z.infer<typeof addressSchema>;

interface AddAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAddress: (address: AddressInput | Address) => void;
  initialData?: Address;
}

const AddAddressModal = ({
  isOpen,
  onClose,
  onAddAddress,
  initialData,
}: AddAddressModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: initialData
      ? {
          houseNo: initialData.address.split(",")[0].trim(),
          street: initialData.address.split(",")[1].trim(),
          district: initialData.address.split(",")[2].trim(),
          pinCode: initialData.address.split(",")[3]?.trim(),
        }
      : undefined,
  });

  const onSubmit = (data: AddressFormData) => {
    const fullAddress = `${data.houseNo}, ${data.street}, ${data.district}, ${data.pinCode}`;

    const addressToSubmit = initialData
      ? { ...initialData, address: fullAddress }
      : { address: fullAddress };

    console.log("Submitted Address:", addressToSubmit);
    onAddAddress(addressToSubmit);
    reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit Address" : "Add New Address"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
          <div className="space-y-2">
            <Label htmlFor="houseNo">House/Flat Number</Label>
            <Input
              id="houseNo"
              placeholder="Enter house/flat number"
              {...register("houseNo")}
            />
            {errors.houseNo && (
              <p className="text-red-500 text-sm">{errors.houseNo.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="street">Street/Locality</Label>
            <Input
              id="street"
              placeholder="Enter street or locality"
              {...register("street")}
            />
            {errors.street && (
              <p className="text-red-500 text-sm">{errors.street.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="district">District</Label>
              <Input
                id="district"
                placeholder="Enter district"
                {...register("district")}
              />
              {errors.district && (
                <p className="text-red-500 text-sm">
                  {errors.district.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="pinCode">Pin Code</Label>
              <Input
                id="pinCode"
                placeholder="Enter pin code"
                {...register("pinCode")}
              />
              {errors.pinCode && (
                <p className="text-red-500 text-sm">{errors.pinCode.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {initialData ? "Update Address" : "Save Address"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAddressModal;
