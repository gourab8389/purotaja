"use server";

import { prisma } from "@/lib/prisma";
import { Store } from "@prisma/client";

export const addStore = async (data: any) => {
  if (!data) {
    throw new Error("Invalid data");
  }

  const result = await prisma.store.create({
    data: {
      label: data.label,
      value: data.value!,
    },
  });

  if (!result) {
    throw new Error("Failed to create store");
  }

  return result;
};

export async function updateStore(data: any) {
  if (!data) {
    throw new Error("Invalid data");
  }

  const store = await prisma.store.findUnique({ where: { id: data.id } });

  if (store) {
    const result = await prisma.store.update({
      where: { id: data.id },
      data: {
        label: data.label,
      },
    });

    if (!result) {
      throw new Error("Failed to update store");
    }

    return result;
  }
}

export async function getStores(): Promise<Store[]> {
  try {
    const stores = await prisma.store.findMany();
    return stores;
  } catch (error) {
    throw new Error("Failed to fetch stores");
  }
}