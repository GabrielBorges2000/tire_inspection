"use client"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { X, Check } from 'lucide-react'
import { LogoIcon } from "@/assets/logo"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { TruckIcon } from "@/assets/truck"
import { cn } from "@/lib/utils"

type TireStatus = {
  id: string;
  status: "approved";
};

type Vehicle = {
  id: string;
  plate: string;
  approved: boolean;
  date: string;
  tireRigth: TireStatus[];
  tireLeft: TireStatus[];
};


export default function Component() {
  const [vehicle, setvehicle] = useState<Vehicle>()

  const vehicleData = [
    {
      id: "V001",
      plate: "AB 12345",
      approved: false,
      date: '2024-08-26',
      tireRigth: [
        { id: "T001", status: "approved" },
        { id: "T002", status: "approved" },
        { id: "T003", status: "approved" },
        { id: "T004", status: "approved" },
        { id: "T005", status: "approved" },
        { id: "T006", status: "approved" },
      ],
      tireLeft: [
        { id: "T007", status: "approved" },
        { id: "T008", status: "approved" },
        { id: "T009", status: "reproved" },
        { id: "T010", status: "approved" },
        { id: "T011", status: "approved" },
        { id: "T012", status: "approved" },
      ],
    },
    {
      id: "V002",
      plate: "AB 12345",
      approved: true,
      date: '2024-08-26',
      tireRigth: [
        { id: "T001", status: "approved" },
        { id: "T002", status: "approved" },
        { id: "T003", status: "approved" },
        { id: "T004", status: "approved" },
        { id: "T005", status: "approved" },
        { id: "T006", status: "approved" },
      ],
      tireLeft: [
        { id: "T007", status: "approved" },
        { id: "T008", status: "approved" },
        { id: "T009", status: "approved" },
        { id: "T010", status: "approved" },
        { id: "T011", status: "approved" },
        { id: "T012", status: "approved" },
      ],
    },
    {
      id: "V003",
      plate: "AB 12345",
      approved: false,
      date: '2024-08-26',
      tireRigth: [
        { id: "T001", status: "approved" },
        { id: "T002", status: "approved" },
        { id: "T003", status: "reproved" },
        { id: "T004", status: "approved" },
        { id: "T005", status: "approved" },
        { id: "T006", status: "approved" },
        { id: "T007", status: "approved" },
        { id: "T008", status: "approved" },
      ],
      tireLeft: [
        { id: "T009", status: "approved" },
        { id: "T010", status: "approved" },
        { id: "T011", status: "approved" },
        { id: "T012", status: "approved" },
        { id: "T013", status: "reproved" },
        { id: "T014", status: "reproved" },
        { id: "T015", status: "approved" },
        { id: "T016", status: "approved" },
      ],
    },

  ] as Vehicle[]



  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#2D4152] border-b p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <LogoIcon />
        </h1>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Vehicle Plate</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Tires</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicleData.map((item) => (
                <TableRow
                  key={item.id}
                  className="cursor-pointer hover:bg-muted/50"
                >
                  <TableCell className="font-medium">{item.plate}</TableCell>
                  <TableCell>
                    <Badge
                      variant='secondary'
                      className={`text-white ${item.approved ? "bg-green-500 " : "bg-red-500"}`}
                    >
                      {item.approved ? "Approved" : "Disapproved"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {item.date}
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <Button
                        variant={"outline"}
                        onClick={() => setvehicle(item)}
                        asChild
                      >
                        <DialogTrigger>
                          Details
                        </DialogTrigger>
                      </Button>
                      <DialogContent className="sm:max-w-[80%]">

                        <DialogHeader>
                          <DialogTitle>Truck Details</DialogTitle>
                          <div className="flex flex-col justify-between">
                            <p>Plate {vehicle?.plate}</p>
                            <p>Date: {vehicle?.date}</p>
                            <p className={`${vehicle?.approved ?'text-green-500': 'text-red-500'}`}>Status : {vehicle?.approved ? 'Approved' : 'Reproved'}</p>
                          </div>
                          <Separator className="h-1 rounded-lg" />
                        </DialogHeader>
                        <div className="py-6 px-2 overflow-y-scroll max-h-[70vh] flex items-center justify-center">
                          <div className="flex flex-row gap-8">

                            {/* rodas da esquerda */}
                            <div className="flex flex-col  justify-between items-center max-h-[400rem] pt-24 pb-8">
                              {vehicle?.tireLeft.map((tire) => {
                                return (
                                  <div
                                    key={tire.id}
                                    className={cn(
                                      "rounded-full w-10 h-10 flex items-center justify-center text-white",
                                      tire.status === "approved"
                                       ? "bg-green-500"
                                        : "bg-red-500"
                                    )}
                                  >
                                    {tire.status === "approved" ? <Check /> : <X />}
                                  </div>
                                )
                              })}
                            </div>
                            {/* rodas da esquerda */}

                            {/* caminhão*/}
                            <TruckIcon />
                            {/* caminhão */}

                            {/* rodas da direita */}
                            <div className="flex flex-col justify-between items-center max-h-[400rem] pt-24 pb-8">
                              {vehicle?.tireRigth.map((tire) => {
                                return (
                                  <div
                                    key={tire.id}
                                    className={cn(
                                      "rounded-full w-10 h-10 flex items-center justify-center text-white",
                                      tire.status === "approved"
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                    )}
                                  >
                                    {tire.status === "approved" ? <Check /> : <X />}
                                  </div>
                                )
                              })}
                            </div>
                            {/* rodas da direita */}

                          </div>
                        </div>
                        <Separator className="h-1 rounded-lg" />
                        <DialogFooter className="flex flex-col">
                          <DialogClose asChild>
                            <Button type="button">Fechar</Button>
                          </DialogClose>
                        </DialogFooter>

                      </DialogContent>
                    </Dialog>


                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  )
}
