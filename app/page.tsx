import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LockKeyhole, Mail, UserPlus, LogIn } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-slate-900 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
              <LockKeyhole className="h-8 w-8 text-white" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">ConsultaMed</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Sistema de Gestión Médica</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login" className="flex items-center gap-2">
              <LogIn size={16} />
              <span>Iniciar Sesión</span>
            </TabsTrigger>
            <TabsTrigger value="register" className="flex items-center gap-2">
              <UserPlus size={16} />
              <span>Registrarse</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="border-blue-100 dark:border-blue-900 shadow-lg">
              <CardHeader>
                <CardTitle>Bienvenido de vuelta</CardTitle>
                <CardDescription>Ingresa tus credenciales para acceder al sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>Correo Electrónico</span>
                  </Label>
                  <Input id="email" type="email" placeholder="doctor@consultamed.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2">
                    <LockKeyhole size={16} />
                    <span>Contraseña</span>
                  </Label>
                  <Input id="password" type="password" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="font-normal">
                    Recordar sesión
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Link href="/dashboard" className="w-full">
                  <Button className="w-full">Iniciar Sesión</Button>
                </Link>
                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline text-center">
                  ¿Olvidaste tu contraseña?
                </a>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card className="border-blue-100 dark:border-blue-900 shadow-lg">
              <CardHeader>
                <CardTitle>Crear una cuenta</CardTitle>
                <CardDescription>Regístrate para comenzar a usar el sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Nombre</Label>
                    <Input id="first-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Apellido</Label>
                    <Input id="last-name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-email">Correo Electrónico</Label>
                  <Input id="reg-email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-password">Contraseña</Label>
                  <Input id="reg-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="font-normal">
                    Acepto los{" "}
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                      términos y condiciones
                    </a>
                  </Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Crear Cuenta</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 ConsultaMed - Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  )
}
