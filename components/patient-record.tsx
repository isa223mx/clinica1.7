"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, Save } from "lucide-react"

export default function PatientRecord() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <Card className="border-blue-100 dark:border-blue-900">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
            <UserPlus className="h-5 w-5 text-blue-600 dark:text-blue-300" />
          </div>
          <div>
            <CardTitle>Historia Clínica</CardTitle>
            <CardDescription>Registre los datos del nuevo paciente</CardDescription>
          </div>
        </div>

        <div className="mt-4">
          <div className="relative">
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? "bg-blue-600 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-700"} text-white`}
              >
                1
              </div>
              <div
                className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-blue-600 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-700"}`}
              ></div>
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? "bg-blue-600 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-700"} text-white`}
              >
                2
              </div>
              <div
                className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-blue-600 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-700"}`}
              ></div>
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? "bg-blue-600 dark:bg-blue-500" : "bg-gray-200 dark:bg-gray-700"} text-white`}
              >
                3
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Datos Personales</span>
              <span
                className={
                  step >= 2 ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-500 dark:text-gray-400"
                }
              >
                Antecedentes
              </span>
              <span
                className={
                  step >= 3 ? "text-blue-600 dark:text-blue-400 font-medium" : "text-gray-500 dark:text-gray-400"
                }
              >
                Información Médica
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {step === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input id="name" placeholder="Nombre completo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Fecha de Nacimiento</Label>
                <Input id="dob" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Género</Label>
                <Select>
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Masculino</SelectItem>
                    <SelectItem value="female">Femenino</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="occupation">Ocupación</Label>
                <Input id="occupation" placeholder="Ocupación" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" placeholder="Teléfono" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" type="email" placeholder="Correo electrónico" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Dirección</Label>
              <Textarea id="address" placeholder="Dirección completa" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergency-contact">Contacto de Emergencia</Label>
              <Input id="emergency-contact" placeholder="Nombre y teléfono" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="allergies">Alergias</Label>
              <Textarea id="allergies" placeholder="Alergias conocidas" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="medical-history">Antecedentes Médicos</Label>
              <Textarea id="medical-history" placeholder="Historial médico relevante" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="family-history">Antecedentes Familiares</Label>
              <Textarea id="family-history" placeholder="Historial médico familiar" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="medications">Medicamentos Actuales</Label>
              <Textarea id="medications" placeholder="Medicamentos que toma actualmente" />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="blood-type">Grupo Sanguíneo</Label>
              <Select>
                <SelectTrigger id="blood-type">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a+">A+</SelectItem>
                  <SelectItem value="a-">A-</SelectItem>
                  <SelectItem value="b+">B+</SelectItem>
                  <SelectItem value="b-">B-</SelectItem>
                  <SelectItem value="ab+">AB+</SelectItem>
                  <SelectItem value="ab-">AB-</SelectItem>
                  <SelectItem value="o+">O+</SelectItem>
                  <SelectItem value="o-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">Estatura (cm)</Label>
                <Input id="height" type="number" placeholder="170" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Peso (kg)</Label>
                <Input id="weight" type="number" step="0.1" placeholder="70.0" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bmi">IMC</Label>
                <Input id="bmi" type="number" step="0.01" placeholder="24.22" disabled />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="habits">Hábitos</Label>
              <Textarea id="habits" placeholder="Tabaquismo, alcoholismo, ejercicio, etc." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="observations">Observaciones Adicionales</Label>
              <Textarea id="observations" placeholder="Cualquier otra información relevante" />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 ? (
          <Button variant="outline" onClick={prevStep}>
            Anterior
          </Button>
        ) : (
          <div></div>
        )}

        {step < 3 ? (
          <Button onClick={nextStep}>Siguiente</Button>
        ) : (
          <Button className="flex items-center gap-2">
            <Save size={16} />
            <span>Guardar Historia Clínica</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
