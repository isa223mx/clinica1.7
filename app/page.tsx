import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LockKeyhole, Mail, UserPlus, LogIn } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-slate-900 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center shadow-[8px_8px_16px_rgba(0,0,0,0.10),-8px_-8px_16px_rgba(255,255,255,0.9)] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05)]">
              <LockKeyhole className="h-8 w-8 text-white" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow">
                <span className="text-white text-xs font-bold">+</span>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">ConsultaMed</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Sistema de Gestión Médica</p>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 p-1 bg-blue-50 dark:bg-slate-800 rounded-xl shadow-inner">
            <TabsTrigger
              value="login"
              className={cn(
                "flex items-center gap-2 rounded-lg transition-all",
                "data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700",
                "data-[state=active]:shadow-[4px_4px_10px_rgba(0,0,0,0.08),-4px_-4px_10px_rgba(255,255,255,0.8)]",
                "dark:data-[state=active]:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.05)]"
              )}
            >
              <LogIn size={16} />
              <span>Iniciar Sesión</span>
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className={cn(
                "flex items-center gap-2 rounded-lg transition-all",
                "data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700",
                "data-[state=active]:shadow-[4px_4px_10px_rgba(0,0,0,0.08),-4px_-4px_10px_rgba(255,255,255,0.8)]",
                "dark:data-[state=active]:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.05)]"
              )}
            >
              <UserPlus size={16} />
              <span>Registrarse</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className={cn(
              "border-none bg-blue-50 dark:bg-slate-800",
              "shadow-[8px_8px_16px_rgba(0,0,0,0.10),-8px_-8px_16px_rgba(255,255,255,0.9)]",
              "dark:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05)]",
              "rounded-2xl"
            )}>
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">Bienvenido de vuelta</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Ingresa tus credenciales para acceder al sistema
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <Mail size={16} />
                    <span>Correo Electrónico</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="doctor@consultamed.com"
                    className={cn(
                      "bg-blue-50 dark:bg-slate-800 border-none",
                      "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
                      "dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]",
                      "focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <LockKeyhole size={16} />
                    <span>Contraseña</span>
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    className={cn(
                      "bg-blue-50 dark:bg-slate-800 border-none",
                      "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
                      "dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]",
                      "focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500"
                    )}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" className="rounded-md data-[state=checked]:bg-blue-500"/>
                  <Label htmlFor="remember" className="font-normal text-gray-600 dark:text-gray-400">
                    Recordar sesión
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Link href="/dashboard" className="w-full">
                  <Button className={cn(
                    "w-full bg-blue-500 hover:bg-blue-600",
                    "shadow-[4px_4px_8px_rgba(0,0,0,0.10),-4px_-4px_8px_rgba(255,255,255,0.9)]",
                    "dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]",
                    "transform active:scale-95 transition-all"
                  )}>
                    Iniciar Sesión
                  </Button>
                </Link>
                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline text-center">
                  ¿Olvidaste tu contraseña?
                </a>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card className={cn(
              "border-none bg-blue-50 dark:bg-slate-800",
              "shadow-[8px_8px_16px_rgba(0,0,0,0.10),-8px_-8px_16px_rgba(255,255,255,0.9)]",
              "dark:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05)]",
              "rounded-2xl"
            )}>
              <CardHeader>
                <CardTitle className="text-blue-600 dark:text-blue-400">Crear una cuenta</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Regístrate para comenzar a usar el sistema
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-blue-600 dark:text-blue-400">Nombre</Label>
                    <Input
                      id="first-name"
                      className={cn(
                        "bg-blue-50 dark:bg-slate-800 border-none",
                        "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
                        "dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-blue-600 dark:text-blue-400">Apellido</Label>
                    <Input
                      id="last-name"
                      className={cn(
                        "bg-blue-50 dark:bg-slate-800 border-none",
                        "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
                        "dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]"
                      )}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-email" className="text-blue-600 dark:text-blue-400">Correo Electrónico</Label>
                  <Input
                    id="reg-email"
                    type="email"
                    className={cn(
                      "bg-blue-50 dark:bg-slate-800 border-none",
                      "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
                      "dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]"
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-password" className="text-blue-600 dark:text-blue-400">Contraseña</Label>
                  <Input
                    id="reg-password"
                    type="password"
                    className={cn(
                      "bg-blue-50 dark:bg-slate-800 border-none",
                      "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
                      "dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]"
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-blue-600 dark:text-blue-400">Confirmar Contraseña</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    className={cn(
                      "bg-blue-50 dark:bg-slate-800 border-none",
                      "shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
                      "dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]"
                    )}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" className="rounded-md data-[state=checked]:bg-blue-500"/>
                  <Label htmlFor="terms" className="font-normal text-gray-600 dark:text-gray-400">
                    Acepto los{" "}
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                      términos y condiciones
                    </a>
                  </Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button className={cn(
                  "w-full bg-blue-500 hover:bg-blue-600",
                  "shadow-[4px_4px_8px_rgba(0,0,0,0.10),-4px_-4px_8px_rgba(255,255,255,0.9)]",
                  "dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]",
                  "transform active:scale-95 transition-all"
                )}>
                  Crear Cuenta
                </Button>
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