export interface Usuario {

    nombre: string,
    edad: number,
    correo: string,
    uid?: string,
    password: string,
    perfil: 'empleado'| 'admin'
}