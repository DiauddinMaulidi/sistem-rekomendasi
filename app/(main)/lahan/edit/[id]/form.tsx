"use client"

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "next/navigation";
import { tampilLahan } from "@/services/tambah";
import { getLahanById } from "@/services/edit";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface FormEditProps {
  lahan: any;
}

export default function FormEdit({lahan}: FormEditProps) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      nama: lahan?.nama || "",
      luas: lahan?.luas || 0,
      lokasi: lahan?.lokasi || "",
      tanaman: lahan?.tanaman || "",
      sensor: lahan?.sensor || "",
      gambar: lahan?.gambar || null,
      tanggal: lahan?.tanggal || 0,
    },
  });
  const onSubmit = (data:any) => console.log(data);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informasi Kebun {lahan.nama}</CardTitle>
      </CardHeader>

      <CardContent>
        <form id="form-rhf-demo" onSubmit={handleSubmit(onSubmit)}>
          <Controller
              name="nama"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Nama Lahan</FieldLabel>

                  <Input
                    {...field}
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}

                  <FieldDescription className="mt-0 mb-3">
                    Contoh: Lahan Utama
                  </FieldDescription>
                </Field>
              )}
            />
          
          <Controller
              name="luas"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Luas Lahan</FieldLabel>

                  <Input
                    {...field}
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}

                  <FieldDescription className="mt-0 mb-3">
                    Contoh: 1.4
                  </FieldDescription>
                </Field>
              )}
            />
          
          <Controller
              name="lokasi"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Lokasi / Desa</FieldLabel>

                  <Input
                    {...field}
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}

                  <FieldDescription className="mt-0 mb-3">
                    Contoh: Desa Pancor
                  </FieldDescription>
                </Field>
              )}
            />
          
          <Controller
              name="tanaman"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Jenis Tanaman</FieldLabel>

                  <Input
                    {...field}
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}

                  <FieldDescription className="mt-0 mb-3">
                    Contoh: 1.4
                  </FieldDescription>
                </Field>
              )}
            />
          
          <Controller
              name="sensor"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="mt-0 mb-3">
                  <FieldLabel>Status Sensor</FieldLabel>

                  <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-10">
                    <div className="flex gap-3">
                      <RadioGroupItem value="aktif" id="aktif" />
                      <Label htmlFor="aktif">Aktif</Label>
                    </div>

                    <div className="flex gap-3">
                      <RadioGroupItem value="tidakAktif" id="tidakAktif" />
                      <Label htmlFor="tidakAktif">Tidak Aktif</Label>
                    </div>
                  </RadioGroup>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          <Controller
              name="gambar"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Gambar Lahan</FieldLabel>

                  <div
                    className="flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-border p-8 text-center transition-colors hover:border-primary"
                    onClick={() => document.getElementById("fileUpload")?.click()}
                  >
                    <div className="mb-2 rounded-full bg-muted p-3">
                      <Upload className="h-5 w-5 text-muted-foreground" />
                    </div>

                    <p className="font-medium text-sm text-foreground">
                      Upload gambar lahan
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      atau{" "}
                      <span className="font-medium text-primary">
                        klik untuk memilih
                      </span>{" "}
                      (maks. 4 MB)
                    </p>

                    <Input
                      id="fileUpload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => field.onChange(e.target.files?.[0] ?? null)}
                    />
                  </div>

                  {field.value && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      File: {field.value}
                    </p>
                  )}

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}

                  <FieldDescription>
                    Format yang didukung: JPG, PNG, WEBP.
                  </FieldDescription>
                </Field>
              )}
            />

        </form>
      </CardContent>
    </Card>
  )
}
