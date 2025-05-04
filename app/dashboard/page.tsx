import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, Calendar, ClipboardList, Clock, Users, FileText, TrendingUp, Bell } from "lucide-react"
import Link from "next/link"
import DashboardLayout from "@/components/dashboard-layout"

export default function Dashboard() {
  // Datos de ejemplo para el dashboard
  const upcomingAppointments = [
    { id: 1, patient: "María García", time: "10:00 AM", type: "Consulta General" },
    { id: 2, patient: "Carlos López", time: "11:30 AM", type: "Seguimiento" },
    { id: 3, patient: "Ana Martínez", time: "2:15 PM", type: "Primera Consulta" },
  ]

  const recentPatients = [
    { id: 1, name: "Juan Pérez", age: 45, lastVisit: "Ayer", status: "Seguimiento" },
    { id: 2, name: "Laura Sánchez", age: 32, lastVisit: "Hace 3 días", status: "Recuperado" },
    { id: 3, name: "Roberto Díaz", age: 58, lastVisit: "Hace 1 semana", status: "En tratamiento" },
  ]

  const notifications = [
    { id: 1, message: "Resultados de laboratorio disponibles para María García", time: "Hace 30 min" },
    { id: 2, message: "Recordatorio: Actualizar historial de Carlos López", time: "Hace 2 horas" },
    { id: 3, message: "Nueva cita programada para mañana a las 9:00 AM", time: "Hace 5 horas" },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>  
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Panel Principal</h1>
            <p className="text-gray-600 dark:text-gray-300">Bienvenido, Dr. Juan Pérez</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar size={16} />
              <span className="hidden md:inline">Agenda</span>
            </Button>
            <Button className="flex items-center gap-2">
              <Bell size={16} />
              <span className="hidden md:inline">Notificaciones</span>
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                3
              </span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-blue-200 dark:border-blue-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-300">Pacientes Hoy</p>
                  <h3 className="text-3xl font-bold text-blue-700 dark:text-white mt-1">8</h3>
                </div>
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-700 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
              </div>
              <div className="mt-4 text-sm text-blue-600 dark:text-blue-300 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>12% más que ayer</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 border-green-200 dark:border-green-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600 dark:text-green-300">Consultas Completadas</p>
                  <h3 className="text-3xl font-bold text-green-700 dark:text-white mt-1">5</h3>
                </div>
                <div className="h-12 w-12 bg-green-100 dark:bg-green-700 rounded-full flex items-center justify-center">
                  <ClipboardList className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
              </div>
              <div className="mt-4 text-sm text-green-600 dark:text-green-300 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Tiempo promedio: 25 min</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 border-purple-200 dark:border-purple-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600 dark:text-purple-300">Estudios Pendientes</p>
                  <h3 className="text-3xl font-bold text-purple-700 dark:text-white mt-1">12</h3>
                </div>
                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-700 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
              </div>
              <div className="mt-4 text-sm text-purple-600 dark:text-purple-300 flex items-center">
                <Activity className="h-4 w-4 mr-1" />
                <span>4 resultados nuevos</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 border-amber-200 dark:border-amber-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-600 dark:text-amber-300">Próxima Cita</p>
                  <h3 className="text-xl font-bold text-amber-700 dark:text-white mt-1">10:30 AM</h3>
                </div>
                <div className="h-12 w-12 bg-amber-100 dark:bg-amber-700 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                </div>
              </div>
              <div className="mt-4 text-sm text-amber-600 dark:text-amber-300 flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>María García - Consulta</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-blue-100 dark:border-blue-900">
            <CardHeader className="pb-2">
              <CardTitle>Próximas Citas</CardTitle>
              <CardDescription>Agenda para hoy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{appointment.patient}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{appointment.type}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300">
                        {appointment.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" className="text-blue-600 dark:text-blue-400">
                  Ver todas las citas
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-100 dark:border-blue-900">
            <CardHeader className="pb-2">
              <CardTitle>Notificaciones</CardTitle>
              <CardDescription>Actualizaciones recientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0"
                  >
                    <p className="text-sm">{notification.message}</p>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" size="sm" className="text-blue-600 dark:text-blue-400">
                  Ver todas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="border-blue-100 dark:border-blue-900">
            <CardHeader className="pb-2">
              <CardTitle>Pacientes Recientes</CardTitle>
              <CardDescription>Últimas consultas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <div
                    key={patient.id}
                    className="flex items-center p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-4">
                      <Users className="h-5 w-5 text-green-600 dark:text-green-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{patient.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {patient.age} años - {patient.lastVisit}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300">
                        {patient.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link href="/expediente">
                  <Button variant="outline" className="text-blue-600 dark:text-blue-400">
                    Ver todos los pacientes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 border-blue-100 dark:border-blue-900">
            <CardHeader className="pb-2">
              <CardTitle>Acceso Rápido</CardTitle>
              <CardDescription>Funciones principales del sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/expediente">
                  <div className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-center">
                    <div className="h-12 w-12 mx-auto bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                    <h4 className="font-medium">Expediente</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Gestión de pacientes</p>
                  </div>
                </Link>  

                <Link href="/recitario">
                  <div className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-center">
                    <div className="h-12 w-12 mx-auto bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-2">
                      <FileText className="h-6 w-6 text-green-600 dark:text-green-300" />
                    </div>
                    <h4 className="font-medium">Recitario</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Consultas y recetas</p>
                  </div>
                </Link>

                <Link href="/estudios">
                  <div className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-center">
                    <div className="h-12 w-12 mx-auto bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mb-2">
                      <ClipboardList className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                    </div>
                    <h4 className="font-medium">Estudios</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Laboratorio e imagen</p>
                  </div>
                </Link>

                <Link href="/signos-vitales">
                  <div className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-center">
                    <div className="h-12 w-12 mx-auto bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center mb-2">
                      <Activity className="h-6 w-6 text-red-600 dark:text-red-300" />
                    </div>
                    <h4 className="font-medium">Signos Vitales</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Monitoreo de pacientes</p>
                  </div>
                </Link>

                <Link href="/diagnosticos">
                  <div className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-center">
                    <div className="h-12 w-12 mx-auto bg-amber-100 dark:bg-amber-800 rounded-full flex items-center justify-center mb-2">
                      <ClipboardList className="h-6 w-6 text-amber-600 dark:text-amber-300" />
                    </div>
                    <h4 className="font-medium">Diagnósticos</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Catálogo CIE-10</p>
                  </div>
                </Link>

                <Link href="/perfil">
                  <div className="p-4 border border-gray-100 dark:border-gray-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-center">
                    <div className="h-12 w-12 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    </div>
                    <h4 className="font-medium">Mi Perfil</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Ajustes de cuenta</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
